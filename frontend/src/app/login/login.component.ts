import { AuthLogIn } from './../actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() { }

  login() {
    this.store.dispatch(new AuthLogIn(this.email, this.password));
  }
}
