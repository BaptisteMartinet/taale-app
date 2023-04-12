import {
  ReportSentence,
  MarkSentenceCompleted,
  CreateSentence,
 } from './api';

class SentenceStore {
  public report = ReportSentence;

  public markCompleted = MarkSentenceCompleted;

  public create = CreateSentence;
}

export default new SentenceStore();
