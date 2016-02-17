import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[redify]'
})
export class Redify {

  constructor(private _element: ElementRef, private renderer: Renderer) {
      renderer.setElementStyle(_element.nativeElement, 'color', 'red');
  }
}