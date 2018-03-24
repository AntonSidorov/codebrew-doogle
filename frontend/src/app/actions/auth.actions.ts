import { Action } from '@ngrx/store';

export type All = AuthLogIn;

export const AUTH_LOGIN = '[AUTH] LogIn';
export class AuthLogIn implements Action {
  readonly type = AUTH_LOGIN;
  constructor(/*payload for signing in/out*/) {

  }
}

export const AUTH_LOGOUT = '[AUTH] LogOut';
export class AuthLogOut implements Action {
  readonly type = AUTH_LOGOUT;
  constructor() {

  }
}
