import { Injectable } from '@angular/core';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users';

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

  getUsers() {
    return fetch(this.URL).then((res)=>res.json());
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);
    inputName.value = '';
    inputAge.value = '';
  }
}
