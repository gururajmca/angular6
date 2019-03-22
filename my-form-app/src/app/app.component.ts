import { Component, ViewChild } from '@angular/core';
import { ngForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm: ngForm;
  defaultQuestion = 'pet';
  answer = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onFormSubmit(form: ngForm) {
  //   console.log(form);
  // }

  onFormSubmit() {
    console.log(this.userForm);
  }
}
