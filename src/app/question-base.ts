export class QuestionBase<T> {
    value: T;
    id: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    template: string;
   
    constructor(options: {
        value?: T,
        id?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        template?: string,
      } = {}) {
      this.value = options.value;
      this.id = options.id || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.template = options.template || '';
    }
  }