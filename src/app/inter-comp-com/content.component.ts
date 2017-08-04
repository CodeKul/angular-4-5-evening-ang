import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="row">
      <div class="col-md-12 jumbotron">
        <img src="{{ficImg}}" alt="{{ficImg}}"/>
      </div>
    </div>
  `,
  styles: [`
    .jumbotron {
      height: 300px;
      margin-top: 50px;
    }
  `]
})
export class ContentComponent implements OnInit {

  @Input()
  ficImg: string;

  constructor() { }

  ngOnInit() {
  }

}
