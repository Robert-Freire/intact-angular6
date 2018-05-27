import { Component }       from '@angular/core';
 
import { QuestionService } from './question.service';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Dynamic Forms for Intact </h2>
      <app-dynamic-form ></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

}