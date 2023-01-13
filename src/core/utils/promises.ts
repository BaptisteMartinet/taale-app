import snackbarStore from 'store/common/snackbar';

export interface Opts {
  onSuccess?: () => void;
  successMessage: string | null;
  onError?: () => void;
  errorMessage: string | null;
};

export function handleWithSnack(promise: Promise<unknown>, opts: Opts) {
  const { onSuccess, successMessage, onError, errorMessage } = opts
  promise.then(() => {
    if (onSuccess)
      onSuccess();
    if (successMessage)
      snackbarStore.display(successMessage);
  }).catch(() => {
    if (onError)
      onError();
    if (errorMessage)
      snackbarStore.display(errorMessage, { duration: 'long' });
  });
}