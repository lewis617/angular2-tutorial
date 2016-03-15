import {Component} from 'angular2/core';
import {PowerBooster} from './stateless/power-booster.component';
import {HeroListComponent} from './stateful/hero-list.component';

@Component({
    selector: 'app',
    directives: [PowerBooster, HeroListComponent],
    template: `
      <power-booster></power-booster>
      <hr>
      <hero-list></hero-list>
    `
})
export class App {
}
