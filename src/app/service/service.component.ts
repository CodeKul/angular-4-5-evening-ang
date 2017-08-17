import { BackendService } from './backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
  //providers: [BackendService] // imp
})
export class ServiceComponent implements OnInit {

  dt: string;
  constructor(
    private backSer: BackendService
  ) { }

  ngOnInit() {
    this.dt = this.backSer.nm;
    this.backSer.dtLsnr(dt => {
      console.log(dt);
      this.dt = dt.key1;
    });
  }

  myClick() {
    // this.backSer.nm = '' + new Date();
    this.backSer.chgDt();
  }
}
