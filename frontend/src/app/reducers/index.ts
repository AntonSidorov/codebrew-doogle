import { routerReducer } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { emptyReducer } from './empty.reducer';
import { dataReducer } from './data.reducer';
import { authReducer } from './auth.reducer';

export const reducers = {
  routerReducer: routerReducer,
  auth: authReducer,
  data: dataReducer
  // reducers
};
