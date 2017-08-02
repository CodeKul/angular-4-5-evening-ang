import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hi',
  template: `
     <div class="row">
       <div class="col-md-12">
         <h1>Hi ... :)</h1>
       </div>
     </div>
  `,
  styles: []
  })
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
