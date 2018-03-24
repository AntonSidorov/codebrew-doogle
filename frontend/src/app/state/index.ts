import { RouterReducerState } from '@ngrx/router-store/';
import { AuthState } from './auth.state';

export interface AppState {
  routerReducer: RouterReducerState;
  auth: AuthState;
  // class state definitions
}

export function initial(): AppState {
  return {
    routerReducer: undefined,
    auth: AuthState.Default()
    // instances
  };
}
