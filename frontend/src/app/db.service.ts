import { Community } from './classes/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from './state/index';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbService {

  constructor(public db: AngularFireDatabase, private store: Store<AppState>) { }

  public communities(): Observable<Community[]> {
    return this.db.list('communities').valueChanges().map(v => v as Community[]);
  }
}
