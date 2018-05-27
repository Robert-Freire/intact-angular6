import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, FormControl }                 from '@angular/forms';
 
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';
 
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
 
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService, private service: QuestionService) {  }
 
  ngOnInit() {
    this.form =  new FormGroup({ dummy: new FormControl()} );
    this.service.getQuestions().then ( result =>  {
        this.questions = result;
        this.form = this.qcs.toFormGroup(this.questions);
    });  

  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}