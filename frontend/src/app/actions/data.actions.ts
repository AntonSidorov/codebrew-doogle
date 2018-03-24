import { Action } from '@ngrx/store';
import { Community } from '../classes/';

export type All = DataCommunitiesLoad | DataCommunitiesLoaded;

export const DATA_COMMUNITIES_LOAD = '[DATA] CommunitiesLoad';
export class DataCommunitiesLoad implements Action {
  readonly type = DATA_COMMUNITIES_LOAD;
  constructor() {

  }
}
export const DATA_COMMUNITIES_LOADED = '[DATA] CommunitiesLoaded';
export class DataCommunitiesLoaded implements Action {
  readonly type = DATA_COMMUNITIES_LOADED;
  constructor(public payload: Community[]) {
  }
}
