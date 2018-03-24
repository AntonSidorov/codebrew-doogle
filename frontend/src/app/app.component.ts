import { Helper } from './classes/helper';
import { fake } from './classes';
import { AUTH } from './state/selectors';
import { Observable } from 'rxjs/Observable';
import { Component, AfterViewInit, HostListener, HostBinding, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

  ],
  providers: [GoogleMapsAPIWrapper],

})
export class AppComponent implements AfterViewInit, OnInit {
  lat = 13.253179;
  lng = 18.123326;
  zoom = 6;
  login = false;
  upload = false;
  auth = this.store.select(AUTH.state);
  openWindow = undefined;

  @ViewChildren('iw')
  infoWindows: QueryList<any>;

  requests = [];

  overlays: { left: boolean, right: boolean } = { left: false, right: false };

  constructor(private store: Store<AppState>, private mapApiWrapper: GoogleMapsAPIWrapper) {

  }

  test(ev) {
    console.log(ev);
  }
  log = (e) => console.log(e);
  mapClick = (gmap) => {
    console.log('toggleInfo')
    if (!this.openWindow) return;
    this.openWindow.close();
  }
  toggleInfo(iw, gmap) {
    console.log('toggleInfo');
    if (!this.openWindow) {
      iw.open();
      this.openWindow = iw;
      return;
    }
    this.openWindow.close();
    if (this.openWindow == iw) {
      this.openWindow = undefined; return;
    }

    iw.open();
    this.openWindow = iw;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.requests);
    }, 2000);
  }
  ngOnInit() {
    this.requests = [].concat(...fake().communities.map(v => v.requests)).slice(0, 10);
  }

  toggleLogin = () => { this.login = !this.login; this.upload = false; };
  toggleUpload = () => { this.upload = !this.upload; this.login = false; };
  toggleOverlay = (left) => {
    if (left)
      this.overlays.left = !this.overlays.left;
    else
      this.overlays.right = !this.overlays.right;
    console.log(this.overlays);
  }
  // @HostListener('window:resize', ['$event'])
  // onResize = event => this.store.dispatch(new UiWindowResize(event.target.innerWidth, event.target.innerHeight));
}
