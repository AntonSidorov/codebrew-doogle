import { Community, AidRequest } from './classes';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from './state/index';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbService {

  constructor(public db: AngularFireDatabase, private store: Store<AppState>) { }

  public communities(): Observable<Community[]> {
    return this.db.list('communities').valueChanges().map((v) => v.map((v1, i) => ({ ...v1, id: `${i}` })) as Community[]);
  }

  public updateCommunity = (community: Community) => console.log(community) || this.db.list('communities/').update(community.id, community);

  public requestId = (community: Community, request: AidRequest) => Object.keys(community.requests).find(k => community.requests[k] == request);
  public joinRequest = (uid: string, request: AidRequest, community: Community) => this.updateCommunity(
    {
      ...community,
      requests: {
        ...community.requests,
        [this.requestId(community, request)]: { ...request, workers: [...(request.workers || []), uid] }
      }
    });
  public leaveRequest = (uid: string, request: AidRequest, community: Community) =>
    this.updateCommunity(
      {
        ...community,
        requests: {
          ...community.requests,
          [this.requestId(community, request)]: { ...request, workers: [...(request.workers || []).filter(u => u != uid)] }
        }
      })
  public finishRequest = (uid: string, request: AidRequest, community: Community) => this.db.database.ref(`communities/${community.id}/requests/${this.requestId(community, request)}`).remove();
}
