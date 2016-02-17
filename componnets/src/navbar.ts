import { Component} from 'angular2/core';
import {NgFor} from 'angular2/common'

@Component({
    selector: "navbar",
    directives: [NgFor],
    styles: [`
        li{
          color: gray;
        }
    `],
    template: `
        <h2>Democratic Party presidential candidates</h2>
        <ul>
        <li *ngFor="#item of items; #i = index">{{item}} {{i}}</li>
        </ul>
    `
})
export class Navbar {
    items: Array<String>

    constructor() {
      this.items = [
        "Hillary Clinton",
        "Martin O'Malley",
        "Bernie Sanders"
      ]
    }

    ngOnInit() {
        console.log('[Component] navbar onInit');
    }
}


