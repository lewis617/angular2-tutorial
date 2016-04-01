
import {Injectable} from 'angular2/core';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class CrisisService {
  getCrises() { return crisesPromise; }

  getCrisis(id: number | string) {
    return crisesPromise
      .then(crises => crises.filter(c => c.id === +id)[0]);
  }


  static nextCrisisId = 100;

  addCrisis(name:string) {
    name = name.trim();
    if (name){
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }
}

var crises = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),  
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

var crisesPromise = Promise.resolve(crises);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/