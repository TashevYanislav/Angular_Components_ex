import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  title = 'pipes-interceptors-subjects';

  user = { name: 'Pesho', age: 22, list: [1, 2, 3, 4, 5, 6, 7] };

  sum(acc: number, curr: number): number {
    return acc + curr;
  }
  addProperty() {
    (this.user as any).test = 'test123';
    this.user.list = [...this.user.list, 100];
  }

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1111);
    }, 3000);
  }); // Clock time$ = interval(1000).pipe(map(() => new Date())); I ngOnInit(): void {} }

  ngOnInit(): void {
    // this.userService.loadUsers().subscribe(console.log);
  }

  users$ = this.userService.usersObs$;
  reloadUsers() {
    this.userService.loadUsers();
  }
}
