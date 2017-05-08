import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;

  constructor() { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({}).delay(2000);

    // Simulate an error:
    // return Observable.of({}).delay(2000)
    // Flatmap takes the original observable (x) and replaces it with another one (observable.throw).
    // You can't set a delay on an obserable.throws, hence the replacement with flatmap.
    //  .flatMap(x => Observable.throw('Invalid User Name and/or Password'));
  }
}
