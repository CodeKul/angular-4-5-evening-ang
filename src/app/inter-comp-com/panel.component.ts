import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
  <div class="row">
    <div class="col-md-12">
      <input type="button" value="Spider Man" class="btn btn-primary" (click)="emitData(1)">
      <input type="button" value="Iron Man" class="btn btn-primary" (click)="emitData(2)">
      <input type="button" value="Hulk" class="btn btn-primary" (click)="emitData(3)">
    </div>
  </div>
  `,
  styles: []
})
export class PanelComponent implements OnInit {

  // https://i.ytimg.com/vi/3R2uvJqWeVg/maxresdefault.jpg
  // https://www.sideshowtoy.com/wp-content/uploads/2016/04/captain-america-civil-war-iron-man-xlvi-sixth-scale-marvel-feature-902708.jpg
  // https://www.sideshowtoy.com/wp-content/uploads/2016/01/avengers-age-of-ultron-hulk-maquette-feature-400268-1-740x448.jpg

  @Output()
  imgClicked: EventEmitter<string>;
  constructor() {
    this.imgClicked = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  emitData(img: number) {
    if (img === 1) {
      console.log(`Emit Data is ${img}`);
      this.imgClicked.emit('https://i.ytimg.com/vi/3R2uvJqWeVg/maxresdefault.jpg');
    } if (img === 2) {
      console.log(`Emit Data is ${img}`);
      this.imgClicked.emit('https://www.sideshowtoy.com/wp-content/uploads/2016/04/captain-america-civil-war-iron-man-xlvi-sixth-scale-marvel-feature-902708.jpg');
    } if (img === 3) {
      console.log(`Emit Data is ${img}`);
      this.imgClicked.emit('https://www.sideshowtoy.com/wp-content/uploads/2016/01/avengers-age-of-ultron-hulk-maquette-feature-400268-1-740x448.jpg');
    }
  }
}
