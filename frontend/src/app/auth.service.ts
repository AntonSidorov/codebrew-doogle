import { AuthLoggedIn } from './actions/auth.actions';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppState } from './state/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public fireauth: AngularFireAuth, private store: Store<AppState>, public db: AngularFireDatabase) {
    this.fireauth.authState.subscribe(async s => {
      let data = await this.db.database.ref(`/users/${s.uid}/`).once('value');
      console.log(data.val());
      this.store.dispatch(new AuthLoggedIn({ ...data.val(), id: s.uid }));
    });
  }


  public async login(email: string, password: string): Promise<boolean> {
    try {
      await this.fireauth.auth.signInWithEmailAndPassword(email, password);
      return true;
    }
    catch (e) {
      return false;
    }
  }
  public async logout(): Promise<boolean> {
    try {
      await this.fireauth.auth.signOut();
      return true;
    }
    catch (e) {
      return false;
    }
  }
}
