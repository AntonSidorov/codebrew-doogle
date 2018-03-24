import { DATA_COMMUNITIES_LOADED } from './../actions/data.actions';
import { DataState } from '../state/data.state';
import { DataActions } from '../actions';

export type Action = DataActions.All;

export function dataReducer(state: DataState = DataState.Empty, action: Action) {
  switch (action.type) {
    case DATA_COMMUNITIES_LOADED:
      return { ...state, communities: action.payload };
    default: return state;
  }
}
