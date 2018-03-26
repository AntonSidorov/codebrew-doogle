import { DbService } from './../db.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import '../rxjs';

import * as DataActions from '../actions/data.actions';
import { DataCommunitiesLoaded } from '../actions/data.actions';

@Injectable()
export class DataEffects {

  constructor(private actions: Actions, private db: DbService) { }

  @Effect()
  public loadCommunities = this.actions.ofType(DataActions.DATA_COMMUNITIES_LOAD)
    .mergeMap(_ => this.db.communities())
    .map(v => new DataCommunitiesLoaded((v)));
}
