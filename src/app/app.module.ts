import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent, DynamicFormComponent, DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, BrowserAnimationsModule, MatDatepickerModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
