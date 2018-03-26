import { User } from '../classes';
import { Action } from '@ngrx/store';

export type All = AuthLogIn | AuthLoggedIn | AuthLogOut | AuthError | AuthLoggedOut;

export const AUTH_LOGIN = '[AUTH] LogIn';
export class AuthLogIn implements Action {
  readonly type = AUTH_LOGIN;
  constructor(public email: string, public password: string) {

  }
}

export const AUTH_LOGGED_IN = '[AUTH] LoggedIn';
export class AuthLoggedIn implements Action {
  readonly type = AUTH_LOGGED_IN;
  constructor(public payload: User) {

  }
}


export const AUTH_LOGOUT = '[AUTH] LogOut';
export class AuthLogOut implements Action {
  readonly type = AUTH_LOGOUT;
  constructor() {
  }
}

export const AUTH_LOGGED_OUT = '[AUTH] LoggedOut';
export class AuthLoggedOut implements Action {
  readonly type = AUTH_LOGGED_OUT;
  constructor() {

  }
}

export const AUTH_ERROR = '[AUTH] Error';
export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor() {

  }
}
