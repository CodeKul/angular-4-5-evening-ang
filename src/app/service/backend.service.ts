import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class BackendService {

  nm = 'codekul';

  private em: EventEmitter<any>;

  constructor() {
    this.em = new EventEmitter<any>();
  }

  chgDt() {
    this.em.emit({
      key1: `${new Date().toString()}`,
      key2 : 'val 2'
    });
  }

  dtLsnr(callback: any) {
    this.em.subscribe(newDt => {
      callback(newDt);
    });
  }
}
