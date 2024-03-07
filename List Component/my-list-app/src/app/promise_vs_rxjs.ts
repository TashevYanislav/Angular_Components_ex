import { Observable, map, tap } from "rxjs";

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

interval(1000).subscribe((data) => console.log(data));

const stream$ = interval(20000).pipe(map((x) => x + 0.1)).pipe(tap((x)=>console.log(x)));

stream$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log('erorr:', error),
  complete: () => console.log('Stream Completed'),
});
