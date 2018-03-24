import { AppState } from './index';
// export let UI = {
//   reset: uiReset,
// };


export let AUTH = {
  authenticated: (state: AppState) => state.auth.authenticated
};
