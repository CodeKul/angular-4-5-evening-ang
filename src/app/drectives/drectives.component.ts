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
  constructor() { }

  ngOnInit() {
  }
}
