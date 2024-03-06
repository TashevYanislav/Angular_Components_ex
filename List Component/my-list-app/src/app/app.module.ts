import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { Observable, map } from 'rxjs';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

Promise.resolve(100)
  .then((data) => data * 40)
  .then((data) => console.log(data));

const o = new Observable((observer) => {
  observer.next(100);
  observer.next(200);
  observer.next(300);
  observer.next(400);
});

o.subscribe((data) => {
  console.log('from observable', data);
});

const interval = (intervalValue: number) => {
  const o = new Observable<number>((observer) => {
    let counter = 0;

    const timer = setInterval(() => {
      observer.next(counter++);
    }, intervalValue);

    return () => {
      clearInterval(timer);
    };
  });
  return o;
};

// interval(1000).subscribe((data) => console.log(data));

// const stream$ = interval(20000).pipe(map((x) => x + 0.1));

// stream$.subscribe({
//   next: (data) => console.log(data),
//   error: (error) => console.log('erorr:', error),
//   complete: () => console.log('Stream Completed'),
// });
