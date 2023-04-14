import { handleWithSnack } from 'core/utils/promise';
import homeStore from 'store/screens/home';
import partialStoryStore from 'store/screens/partial-story';
import libraryStore from 'store/screens/library';

export function homeHandler() {
  const promise = homeStore.refresh();
  handleWithSnack(promise, { successMessage: null, errorMessage: true });
}

export function partialStoryHandler() {
  const promise = partialStoryStore.refresh();
  handleWithSnack(promise, { successMessage: null, errorMessage: true });
}

export function libraryHandler() {
  const promise = libraryStore.refresh();
  handleWithSnack(promise, { successMessage: null, errorMessage: true })
}
