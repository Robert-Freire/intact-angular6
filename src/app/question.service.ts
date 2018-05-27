import { Injectable }       from '@angular/core';
 
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { ButtonQuestion } from './question-button';
import { DatePickerQuestion } from './question-datepicker';
 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {
 
    constructor(private http: HttpClient) {

    }

    public getJSON(): Observable<any> {
        return this.http.get("../assets/mydata.json")
    }
    
    getQuestions() {
        return new Promise <QuestionBase<any>[]>(resolve => {
            this.getJSON().subscribe(data => {
                resolve (this.convertJsonToQuestion(data));
            });  
        }) 
    }
    convertJsonToQuestion (data: any){
        let questions: QuestionBase<any>[]= [];
        
        data.elements.forEach(element => {
            questions.push(this.convertElementToQuestion(element))
        });

        return questions;
    }
    convertElementToQuestion (element: any){
        if (element.template.startsWith("<text")){
            return new TextboxQuestion({
                name: element.name,
                label: element.label,
                value: element.value
            })
        }
        if (element.template.startsWith("<eldate")){
            return new DatePickerQuestion({
                name: element.name,
                label: element.label,
                value: element.value
            })
        }
        if (element.template.startsWith("<command")){
            return new ButtonQuestion({
                name: element.name,
                label: element.label,
                value: element.value
            })
        }
    }
}