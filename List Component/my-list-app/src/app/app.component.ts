import { Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-list-app';
  users: User[] = [
    {
      name: 'Pesho',
      age: 20,
    },
    {
      name: 'Tisho',
      age: 12,
    },
    {
      name: 'Misho',
      age: 30,
    },
    {
      name: 'Gisho',
      age: 40,
    },
  ];
  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);
    inputName.value="";
    inputAge.value="";
  }
}
