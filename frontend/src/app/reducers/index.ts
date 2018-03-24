import { routerReducer } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { emptyReducer } from './empty.reducer';
import { dataReducer } from './data.reducer';

export const reducers = {
  routerReducer: routerReducer,
  auth: emptyReducer,
  data: dataReducer
  // reducers
};
