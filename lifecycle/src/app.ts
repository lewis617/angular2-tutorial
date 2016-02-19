import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {UnlessDirective}from './unless.directive';
import {Lifecycle} from './lifecycle'

@Component({
    selector: "app",
    directives:[UnlessDirective,Lifecycle],
    template: `
      <button
      (click)="condition = !condition"
      [style.background] = "condition ? 'orangered': 'lightgreen'"
      >
      Set 'condition' to {{condition ? 'False': 'True'}}
      </button>

      <lifecycle *myUnless="condition" name="lewis"></lifecycle>
    `
})
export class App {
    constructor() {}
}

bootstrap(App, [])
    .catch(err => console.error(err));

                