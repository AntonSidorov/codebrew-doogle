import { AppState } from './index';
// export let UI = {
//   reset: uiReset,
// };


export let AUTH = {
  authenticated: (state: AppState) => state.auth.authenticated,
  state: (state: AppState) => state.auth
};

export let DATA = {
  communities: (state: AppState) => state.data.communities,
  users: (state: AppState) => state.data.users,
  state: (state: AppState) => state.data
}
