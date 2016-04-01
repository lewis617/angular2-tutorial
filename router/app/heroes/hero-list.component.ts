
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Hero, HeroService}   from './hero.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="#hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  private _selectedId: number;

  constructor(
    private _service: HeroService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(hero: Hero) { return hero.id === this._selectedId; }

  onSelect(hero: Hero) {
    this._router.navigate( ['HeroDetail', { id: hero.id }] );
  }

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/