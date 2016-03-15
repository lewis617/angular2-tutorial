import {Component} from 'angular2/core';
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


                