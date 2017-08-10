import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drectives',
  templateUrl: './drectives.component.html',
  styleUrls: ['./drectives.component.css']
})
export class DrectivesComponent implements OnInit {

  maSty = {
    border: '1px solid green',
    padding: '10px'
  };

  reviews  = [
    {rating : 4, review: `this is great product`},
    {rating : 8, review: `this is great product, need proper documentation`},
  ];
  constructor() { }

  ngOnInit() {
  }
}
