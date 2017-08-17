import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable()
export class FrontendService {

  constructor(
    private back: BackendService
  ) {
    this.back.dtLsnr(dt => {

    });
  }
}
