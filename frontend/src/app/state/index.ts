import { RouterReducerState } from '@ngrx/router-store/';

export interface AppState {
  routerReducer: RouterReducerState;
  // class state definitions
}

export function initial(): AppState {
  return {
    routerReducer: undefined,
    // instances
  };
}
