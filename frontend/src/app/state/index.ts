import { RouterReducerState } from '@ngrx/router-store/';
import { AuthState } from './auth.state';
import { DataState } from './data.state';

export interface AppState {
  routerReducer: RouterReducerState;
  auth: AuthState;
  data: DataState;
  // class state definitions
}

export function initial(): AppState {
  return {
    routerReducer: undefined,
    auth: AuthState.Default(),
    data: DataState.Default()
    // instances
  };
}
