import { MapState } from '../state/map.state';
import { MapActions } from '../actions';

export type Action = MapActions.All;

export function mapReducer(state: MapState = MapState.Empty, action: Action){
    switch(action.type){
        
        default: return state;
    }
}