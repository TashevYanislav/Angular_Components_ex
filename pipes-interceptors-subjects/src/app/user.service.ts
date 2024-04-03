import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private UserSubj$$ = new BehaviorSubject<Object | null>(null);

  public usersObs$ = this.UserSubj$$.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.UserSubj$$.next(null);

    this.http.get('/api/users').subscribe((users) => {
      this.UserSubj$$.next(users);
    });
  }
}
