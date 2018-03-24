import { RouterReducerState } from '@ngrx/router-store/';
import { MapState } from './map.state';

export interface AppState {
  routerReducer: RouterReducerState;
  map: MapState;
  // class state definitions
}

export function initial(): AppState {
  return {
    routerReducer: undefined,
    map: MapState.Default()
    // instances
  };
}
