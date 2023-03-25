import { handleWithSnack } from 'core/utils/promises';
import homeStore from 'store/screens/home';
import partialStoryStore from 'store/screens/partial-story';

export function homeHandler() {
  const promise = homeStore.refresh();
  handleWithSnack(promise, { successMessage: null, errorMessage: true });
}

export function partialStoryHandler() {
  const promise = partialStoryStore.refresh();
  handleWithSnack(promise, { successMessage: null, errorMessage: true });
}
