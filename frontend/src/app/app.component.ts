import { DataCommunitiesLoad } from './actions/data.actions';
import { DbService } from './db.service';
import { AidRequest } from './classes/index';
import { Helper } from './classes/helper';
import { AUTH, DATA } from './state/selectors';
import { Observable } from 'rxjs/Observable';
import { Component, AfterViewInit, HostListener, HostBinding, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { AuthLogOut } from './actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

  ],
  providers: [GoogleMapsAPIWrapper],

})
export class AppComponent implements AfterViewInit, OnInit {
  gm = { lat: 13.253179, lng: 18.123326, zoom: 6 };
  login = false;
  upload = false;
  auth = this.store.select(AUTH.state);
  openWindow = undefined;

  communities = this.store.select(DATA.communities);
  requests = this.communities.map(cs => cs.map(c => Object.values(c.requests))).map(r => [].concat(...r));

  query = '';

  types = ['Medical', 'Sanitation', 'Water', 'Education', 'Agriculture', 'Material', 'Emergency'];
  filters = this.types;

  @ViewChildren('iw')
  infoWindows: QueryList<any>;

  requestInfoWindowMap: any[];

  overlays: { left: boolean, right: boolean } = { left: false, right: false };

  constructor(private store: Store<AppState>, private mapApiWrapper: GoogleMapsAPIWrapper, public db: DbService) {
  }

  objToArr = (obj) => Object.values(obj);

  log = (e) => console.log(e);
  mapClick = (gmap) => {
    console.log('toggleInfo')
    if (!this.openWindow) return;
    this.openWindow.close();
  }
  toggleInfo(iw) {
    console.log('toggleInfo');
    if (!this.openWindow || !this.openWindow.isOpen) {
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

  join = async (request) => {
    let communities = await this.communities.take(1).toPromise();
    let com = communities.find(c => !!Object.values(c.requests).find(r => r == request));
    let auth = await this.auth.take(1).toPromise();
    this.db.joinRequest(auth.user.id, request, com);
  }

  leave = async (request) => {
    let communities = await this.communities.take(1).toPromise();
    let com = communities.find(c => !!Object.values(c.requests).find(r => r == request));
    let auth = await this.auth.take(1).toPromise();
    this.db.leaveRequest(auth.user.id, request, com);
  }
  complete = async (request) => {
    let communities = await this.communities.take(1).toPromise();
    let com = communities.find(c => !!Object.values(c.requests).find(r => r == request));
    let auth = await this.auth.take(1).toPromise();
    this.db.finishRequest(auth.user.id, request, com);
  }

  async ngAfterViewInit() {
    this.infoWindows.changes.subscribe(r => this.handleIWs(this.infoWindows.toArray()));
    await this.handleIWs(this.infoWindows.toArray());
  }

  async handleIWs(infoWindows: any[]) {
    let arr = {};
    infoWindows.map(v => arr[`${v.latitude}${v.longitude}`] = { iw: v });
    let reqs = await this.requests.take(1).toPromise();
    reqs.map(v => arr[`${v.geoData.lat}${v.geoData.long}`] = { ...arr[`${v.geoData.lat}${v.geoData.long}`], req: v });
    console.log(Object.values(arr));
    this.requestInfoWindowMap = Object.values(arr);
  }

  openIW(req: AidRequest) {
    this.toggleInfo(this.requestInfoWindowMap.find(r => r.req.geoData == req.geoData).iw)
  }


  ngOnInit() {
    this.store.dispatch(new DataCommunitiesLoad());
  }

  circleColor = (str) => {
    switch (str) {
      case 'Medical':
        return 'orange';
      case 'Sanitation':
        return 'purple';
      case 'Water':
        return 'blue';
      case 'Education':
        return 'green';
      case 'Agriculture':
        return '#0ff';
      case 'Natural':
        return '#333';
      case 'Emergency':
        return 'red';
      default:
        return 'black';
    }
  }

  logout = () => this.store.dispatch(new AuthLogOut());
  toggleLogin = () => { this.login = !this.login; this.upload = false; };
  toggleUpload = () => { this.upload = !this.upload; this.login = false; };
  toggleOverlay = (left) => {
    if (left)
      this.overlays.left = !this.overlays.left;
    else
      this.overlays.right = !this.overlays.right;
  }
}
