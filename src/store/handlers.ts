import { handleWithSnack } from 'core/utils/promises';
import homeStore from 'store/screens/home';

export function homeHandler() {
  const promise = homeStore.init();
  handleWithSnack(promise, { successMessage: null, errorMessage: true });
}
