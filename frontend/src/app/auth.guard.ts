// import { AUTH } from './state/selectors';
// import { AppState } from './state/index';
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';

// @Injectable()
// export class AuthGuard implements CanActivate, CanLoad {
//   constructor(private store: Store<AppState>, private router: Router) { }

//   authenticated = this.store.select(AUTH.authenticated);

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     this.authenticated.subscribe(a => {
//       console.log(a);
//       if (!a) this.router.navigateByUrl('/login');
//     });
//     return this.authenticated;
//   }
//   canLoad() {
//     return true;
//   }
// }
