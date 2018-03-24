import { Component, OnInit } from '@angular/core';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { MapView } from '../actions/map.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() { }

}
