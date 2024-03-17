import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-list/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.userService.getSingleUser(id).subscribe((user) => {
        console.log(user);
      });
    });
  }
}
