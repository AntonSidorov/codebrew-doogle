import { Action } from '@ngrx/store';
import { Community } from '../classes/';

export type All = DataCommunitiesLoad | DataCommunitiesLoaded | DataSearch | DataUpdateFilter;

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

export const DATA_UPDATE_FILTERS = '[DATA] UpdateFilter';
export class DataUpdateFilter implements Action {
  readonly type = DATA_UPDATE_FILTERS;
  constructor(public payload: { filter: string, enabled: boolean }[]) {
  }
}
export const DATA_SEARCH = '[DATA] Search';
export class DataSearch implements Action {
  readonly type = DATA_SEARCH;
  constructor(public payload: string) {

  }
}
