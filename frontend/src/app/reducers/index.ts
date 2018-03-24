import { routerReducer } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { emptyReducer } from './empty.reducer';

export const reducers = {
  routerReducer: routerReducer,
  auth: emptyReducer
  // reducers
};
