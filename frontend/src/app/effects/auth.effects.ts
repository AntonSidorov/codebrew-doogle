import { AuthLogIn, AUTH_LOGGED_IN, AuthLoggedOut, AuthError } from '../actions/auth.actions';
import { AuthService } from './../auth.service';
import { effects } from './index';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import '../rxjs';

import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private actions: Actions, private auth: AuthService) { }

  @Effect({ dispatch: false })
  public login = this.actions.ofType(AuthActions.AUTH_LOGIN)
    .mergeMap((obj: AuthLogIn) => this.auth.login(obj.email, obj.password))

  @Effect()
  public logout = this.actions.ofType(AuthActions.AUTH_LOGOUT)
    .mergeMap(_ => this.auth.logout())
    .map(v => v ? new AuthLoggedOut() : new AuthError());
}
