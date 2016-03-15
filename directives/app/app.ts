import {Component} from 'angular2/core';
import {Redify} from './directives';
import {HighlightDirective} from './highlight.directive';

@Component({
    selector: "app",
    directives:[Redify,HighlightDirective],
    template: `
    redify:
      <p redify >hello,lewis</p>
     myHighlight:
        <div>
          <input type="radio" name="colors" (click)="color='lightgreen'">Green
          <input type="radio" name="colors" (click)="color='yellow'">Yellow
          <input type="radio" name="colors" (click)="color='cyan'">Cyan
        </div>
      <p [myHighlight]="color">Highlight me!</p>
      <p [myHighlight]="color" [defaultColor]="'violet'">Highlight me too!</p>
    `
})
export class App {
    constructor() {

    }
}


                