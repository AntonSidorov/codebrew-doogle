import { Action, ActionReducer } from '@ngrx/store';

export const SETROOT = '[ROOT] Set Root State';
export class SetRoot implements Action {
  readonly type = SETROOT;
  constructor(public payload: any) {}
}

const timeLogger = (d: Date) => `${d.toTimeString().split(' ')[0]}.${d.getMilliseconds()}`;

export function stateReducer(reducer) {
  return function(state, action) {
    if (action.type === SETROOT) {
      return action.payload;
    }
    return reducer(state, action);
  };
}
