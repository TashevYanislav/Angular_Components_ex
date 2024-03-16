import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { UserService } from './user.service';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit,OnDestroy {
  isLoading = false;
  users: User[] = [];

  constructor(private userService: UserService,private globalLoaderService : GlobalLoaderService) {}

  fetchUsers() {

    this.globalLoaderService.showLoader();

    this.isLoading = true;
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
      this.isLoading = false;

      this.globalLoaderService.hideLoader();
    });
  }

  ngOnInit(): void {
    this.fetchUsers();
  }
  ngOnDestroy(): void {
    console.log("On Destroy Invoked");
    
  }
}
