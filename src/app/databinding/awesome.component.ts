import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.css']
})
export class AwesomeComponent implements OnInit {

  brdRed = '1px solid red';
  brdGreen = '1px solid green';
  brdBlue = '1px solid blue';
  constructor() { }

  ngOnInit() {
  }

}
