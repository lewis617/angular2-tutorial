import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Navbar} from './navbar';

@Component({
    selector: "app",
    directives:[Navbar],
    template: `
      <navbar></navbar>
    `
})
export class App {
  constructor() {
   
  }
}

bootstrap(App, [])
  .catch(err => console.error(err));

                