import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    callBackFn: (acc: any, curr: any) => any,
    anitialValue: T
  ): unknown {
    // [1,2,3,4].reduce(callBackFn,0)
    return array.reduce(callBackFn,anitialValue);
  }
}
