import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService{
  userUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
}
