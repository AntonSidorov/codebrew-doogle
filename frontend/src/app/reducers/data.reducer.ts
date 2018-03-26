import { DATA_SEARCH } from './../actions/data.actions';
import { DATA_COMMUNITIES_LOADED, DATA_UPDATE_FILTERS } from '../actions/data.actions';
import { DataState } from '../state/data.state';
import { DataActions } from '../actions';
import { Community } from '../classes';

export type Action = DataActions.All;

let applyFilters = (coms: Community[], filters: { filter: string, enabled: boolean }[]) => coms.map(c => {
  let enabled = filters.map(f => f.enabled ? f.filter : '').filter(v => !!v);
  let reqs = {};
  for (let key in c.requests)
    if (enabled.indexOf(c.requests[key].type) > -1)
      reqs[key] = c.requests[key];
  return { ...c, requests: reqs };
});

let search = (communities: Community[], query: string) => communities.map(c => {
  let reqs = {};
  if (!query) return c;
  for (let key in c.requests)
    if (c.requests[key].name.toLowerCase().startsWith(query.toLowerCase()))
      reqs[key] = c.requests[key];
  return { ...c, requests: reqs };
});

export function dataReducer(state: DataState = DataState.Empty, action: Action) {
  switch (action.type) {
    case DATA_COMMUNITIES_LOADED:
      return { ...state, communities: action.payload };
    case DATA_UPDATE_FILTERS:
      return {
        ...state, filters: action.payload, filteredCommunities: (state.query || action.payload.map(v => v.enabled).filter(v => !v).length > 0) ?
          search(applyFilters(state.communities, action.payload), state.query) : []
      }

    case DATA_SEARCH:
    return {
      ...state, filteredCommunities: (state.query || state.filters.map(v => v.enabled).filter(v => !v).length > 0) ?
      search(applyFilters(state.communities, state.filters), state.query) : []
    }
    default: return state;
  }
}
