import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Redify} from './directives';

@Component({
    selector: "app",
    directives:[Redify],
    template: `
      <p redify >hello,lewis</p>
    `
})
export class App {
  constructor() {
   
  }
}

bootstrap(App, [])
  .catch(err => console.error(err));

                