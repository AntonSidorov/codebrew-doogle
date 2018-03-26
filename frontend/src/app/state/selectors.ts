import { AppState } from './index';
// export let UI = {
//   reset: uiReset,
// };


export let AUTH = {
  authenticated: (state: AppState) => state.auth.authenticated,
  state: (state: AppState) => state.auth
};

export let DATA = {
  communities: (state: AppState) => (state.data.query || state.data.filters.map(v => v.enabled).filter(v => !v).length > 0) ? state.data.filteredCommunities : state.data.communities,
  users: (state: AppState) => state.data.users,
  state: (state: AppState) => state.data,
  filtered: (state: AppState) => state.data.query || (state.data.filters.map(v => v.enabled).filter(v => !v).length > 0)
}
