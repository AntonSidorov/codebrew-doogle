import { DATA_COMMUNITIES_LOADED, DATA_UPDATE_FILTERS } from '../actions/data.actions';
import { DataState } from '../state/data.state';
import { DataActions } from '../actions';
import { Community } from '../classes';

export type Action = DataActions.All;

export function dataReducer(state: DataState = DataState.Empty, action: Action) {
  switch (action.type) {
    case DATA_COMMUNITIES_LOADED:
      return { ...state, communities: action.payload };
    case DATA_UPDATE_FILTERS:
      let applyFilters = (coms: Community[], filters: { filter: string, enabled: boolean }[]) => coms.map(c => {
        let enabled = filters.map(f => f.enabled ? f.filter : '').filter(v => !!v);
        let reqs = {};
        for (let key in c.requests)
          if (enabled.indexOf(c.requests[key].type) > -1)
            reqs[key] = c.requests[key];
        return { ...c, requests: reqs };
      });
      console.log(action.payload.map(v => v.enabled).filter(v => !v));
      applyFilters(state.communities, action.payload);
      return {
        ...state, filters: action.payload, filteredCommunities: (state.query || action.payload.map(v => v.enabled).filter(v => !v).length > 0) ?
          applyFilters(state.communities, state.filters) : []
      }
    default: return state;
  }
}
