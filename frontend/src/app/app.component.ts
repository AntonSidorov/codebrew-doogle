import { AUTH } from './state/selectors';
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
  lat = 13.253179;
  lng = 18.123326;
  zoom = 6;
  login = false;
  upload = false;
  auth = this.store.select(AUTH.state);


  constructor(private store: Store<AppState>) {

  }

  ngAfterViewInit() {
  }
  ngOnInit() {
  }

  toggleLogin = () => { this.login = !this.login; this.upload = false; };
  toggleUpload = () => { this.upload = !this.upload; this.login = false; };

  // @HostListener('window:resize', ['$event'])
  // onResize = event => this.store.dispatch(new UiWindowResize(event.target.innerWidth, event.target.innerHeight));
}
