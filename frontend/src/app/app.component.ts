import { Observable } from 'rxjs/Observable';
import { Component, AfterViewInit, HostListener, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

  ]
})
export class AppComponent implements AfterViewInit, OnInit {

  login = false;

  constructor(private store: Store<AppState>) {

  }

  ngAfterViewInit() {
  }
  ngOnInit() {
  }

  toggleLogin = () => this.login = !this.login;

  // @HostListener('window:resize', ['$event'])
  // onResize = event => this.store.dispatch(new UiWindowResize(event.target.innerWidth, event.target.innerHeight));
}
