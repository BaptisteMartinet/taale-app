import { isApolloError } from '@apollo/client';
import i18n from 'lang';
import snackbarStore from 'store/common/snackbar';

export interface Opts {
  onSuccess?: (value: unknown) => void;
  successMessage: string | null;
  onError?: (error: unknown) => void;
  errorMessage: string | boolean | null;
};

export function handleWithSnack(promise: Promise<unknown>, opts: Opts) {
  const { onSuccess, successMessage, onError, errorMessage } = opts;
  promise.then((value) => {
    if (onSuccess)
      onSuccess(value);
    if (successMessage)
      snackbarStore.display(successMessage);
  }).catch((error) => {
    if (onError)
      onError(error);
    if (errorMessage) {
      switch (typeof errorMessage) {
        case 'string': snackbarStore.display(errorMessage, { duration: 'long' });
        case 'boolean':
          if (!isApolloError(error))
            break;
          // Note: Only displays the first error in the graphQLErrors array
          const errorCode = error.graphQLErrors.at(0)?.extensions.code;
          if (typeof errorCode !== 'string')
            break;
          snackbarStore.display(i18n.t([errorCode, '_Default'], { ns: 'errors' }), { duration: 'long' });
        default: break;
      }
    }
  });
}