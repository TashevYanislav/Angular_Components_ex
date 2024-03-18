import { Injectable } from '@angular/core';
import { AuthUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_KEY = '[user]';
  user: AuthUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const LsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(LsUser);
    } catch (error) {
      console.log(error);
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      firstName: 'Petko',
      email: 'petko@abv.bg',
      password: '123123',
      phoneNumber: '088-888-8888',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
