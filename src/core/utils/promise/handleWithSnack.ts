import { isApolloError } from '@apollo/client';
import i18n from 'lang';
import snackbarStore from 'store/common/snackbar';

export interface Opts<T> {
  onSuccess?: (value: T) => void;
  successMessage: string | null;
  onError?: (error: unknown) => void;
  errorMessage: string | true | null;
};

export default function handleWithSnack<T>(promise: Promise<T>, opts: Opts<T>) {
  const { onSuccess, successMessage, onError, errorMessage } = opts;
  return promise.then((value) => {
    if (onSuccess)
      onSuccess(value);
    if (successMessage)
      snackbarStore.display(successMessage);
    return value;
  }).catch((error) => {
    if (onError)
      onError(error);
    if (errorMessage) {
      switch (typeof errorMessage) {
        case 'string':
          return snackbarStore.display(errorMessage, { duration: 'long' });
        case 'boolean':
          if (!isApolloError(error))
            break;
          const errorCode = error.graphQLErrors.at(0)?.extensions.code;
          if (typeof errorCode !== 'string')
            break;
          return snackbarStore.display(i18n.t([errorCode, '_Default'], { ns: 'errors' }), { duration: 'long' });
        default: break;
      }
      snackbarStore.display(i18n.t('_Default', { ns: 'errors' }), { duration: 'long' });
    }
  });
}
