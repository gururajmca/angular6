import { Component } from '@angular/core';
import { ngForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onFormSubmit(form: ngForm) {
    console.log(form);
  }
}
