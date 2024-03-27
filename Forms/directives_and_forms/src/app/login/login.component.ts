import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formSubmitHandler(form: NgForm) {
    const { email, password } = form?.value;

    if(form.invalid){
      console.log("Form is INVALID");
      
      return;
    }
    console.log(`email: ${email} password: ${password}`);
    
    form.reset();
  }
}
