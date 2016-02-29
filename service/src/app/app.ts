import {Component} from 'angular2/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app',
    directives: [AppComponent],
    template: `
      <my-app></my-app>
    `
})
export class App {
}
