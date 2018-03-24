import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import '../rxjs';

import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private actions: Actions) { }
}
