import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NGRX
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

// NGRX - HMR
import { stateReducer, SETROOT } from './reducers/root.reducer';
import { createNewHosts, removeNgStyles, createInputTransfer } from '@angularclass/hmr';

// // Material
// import {
//   MatSnackBarModule,
//   MatInputModule,
//   MatFormFieldModule,
//   MatButtonModule,
//   MatIconModule,
//   MatSlideToggleModule,
//   MatDialogModule,
//   MatProgressSpinnerModule
// } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Main - Angular
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Main - NGRX
import { initial, AppState } from './state';
import { effects } from './effects';
import { reducers } from './reducers';
import { SimpleSerializer } from './ngrx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // NGRX
    StoreModule.forRoot(reducers, {
      initialState: initial,
      metaReducers: [stateReducer]
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [
    /* services */
    // { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: RouterStateSerializer, useClass: SimpleSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, private _store: Store<AppState>) {}

  hmrOnInit(store) {
    if (!store || !store.rootState) return;

    if (store.rootState) {
      this._store.dispatch({
        type: SETROOT,
        payload: store.rootState
      });
    }

    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this._store.subscribe(s => (store.rootState = s));
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
