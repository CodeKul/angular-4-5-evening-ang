import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  typ = 'text';

  constructor() { }

  ngOnInit() {
  }

  onChangeBtn() {
    this.typ = 'button';
  }
  onChangeIp() {
    this.typ = 'text';
  }
}
