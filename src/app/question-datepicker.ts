import { QuestionBase } from './question-base';

export class DatePickerQuestion extends QuestionBase<string> {
  controlType = 'datePicker';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}