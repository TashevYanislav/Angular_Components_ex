import { Component, OnInit } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-list-app';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }
  ngOnInit(): void {
    this.userService.getUsers().then((data) => {
      console.log('Users data', data);
      this.appUsers = data;
      console.log(this.appUsers);
    });
  }
}
