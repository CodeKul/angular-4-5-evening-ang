import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-out-com',
  template: `
    <div class="row">
      <div class="col-md-12 well">
      <input type="text" >
      <input type="button" (click)="myClick()" class="btn btn-primary ">
      <span class="glyphicon glyphicon-hand-left" aria-hidden="true"></span>
      </div>
    </div>
  `,
  styles: []
})

//getin@codekul.com

export class OutComComponent implements OnInit {

  isThere = false;
  @Output()
  clicked: EventEmitter<boolean>;

  constructor() {
    this.clicked = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  myClick() {
    this.isThere = !this.isThere;
    this.clicked.emit(this.isThere);
  }
}
