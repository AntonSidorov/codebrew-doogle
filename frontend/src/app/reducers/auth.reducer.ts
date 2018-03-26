import { AUTH_LOGGED_IN } from './../actions/auth.actions';
import { AuthState } from '../state/auth.state';
import { AuthActions } from '../actions';

export type Action = AuthActions.All;

export function authReducer(state: AuthState = AuthState.Empty, action: Action) {
  switch (action.type) {
    case (AuthActions.AUTH_LOGGED_IN):
      return { ...state, user: action.payload, authenticated: true };
    case (AuthActions.AUTH_LOGGED_OUT):
      return { ...state, user: undefined, authenticated: false };
    default: return state;
  }
}
