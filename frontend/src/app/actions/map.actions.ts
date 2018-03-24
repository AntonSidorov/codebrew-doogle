import { Action } from '@ngrx/store';

export type All = MapView;

export const MAP_VIEW = '[MAP] View';
export class MapView implements Action {
    readonly type = MAP_VIEW
    constructor() {

    }
}