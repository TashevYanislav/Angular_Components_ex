import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    // console.log('mouseOver', e);
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red');

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnteerHandler.bind(this)
    );
    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaverHandler.bind(this)
    );
  }

  mouseEnteerHandler(e: MouseEvent): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }
  mouseLeaverHandler(e: MouseEvent): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'white'
    );
  }
}
