import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
// This service is used for notifying a component that some event has happenend
  constructor() { }
  private _handler: Subject<any> = new Subject<any>();

  boradcast(type: string, payload: any = null) {
    this._handler.next({ type, payload });
  }

  subscribe(type: string, callback: (payload: any) => void): Subscription {
    return this._handler
      .subscribe(callback);
  } 
}
