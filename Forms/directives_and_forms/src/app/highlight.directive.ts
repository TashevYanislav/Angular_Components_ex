import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  // console.log('mouseOver', e);
  // }

  unsubFromEventsArray: MyVoid[] = [];

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red');

    const mouseEnteerHandler = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnteerHandler.bind(this)
    );
    const mouseLeaverHandler = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaverHandler.bind(this)
    );
    this.unsubFromEventsArray.push(mouseEnteerHandler,mouseLeaverHandler);
  }

  ngOnDestroy(): void {
    console.log('On destroy invoked');
    console.log(this.unsubFromEventsArray);
    this.unsubFromEventsArray.forEach(eventFn=>eventFn())
    
  }

  mouseEnteerHandler(e: MouseEvent): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }
  mouseLeaverHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }
}
