import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}     from './app.component';

// Add these symbols to override the `LocationStrategy`
//import {provide}           from 'angular2/core';
//import {LocationStrategy,
//        HashLocationStrategy} from 'angular2/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS,
  //provide(LocationStrategy,
  //       {useClass: HashLocationStrategy}) // .../#/crisis-center/
 ]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/