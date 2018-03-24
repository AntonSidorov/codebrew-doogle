import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import '../rxjs';

import * as MapActions from '../actions/map.actions';

@Injectable()
export class MapEffects {

    constructor(private actions: Actions) { }

    @Effect({ dispatch: false })
    public mapLoad = this.actions.ofType(MapActions.MAP_VIEW)
        .map((payload: any) => {

        });
}
