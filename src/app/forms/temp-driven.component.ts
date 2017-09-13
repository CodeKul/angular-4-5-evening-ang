import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent implements OnInit {

  dtFrm = {
    usNm: '',
    eml: '',
    pass: ''
  };
  usNmMdl = '';
  constructor() { }

  ngOnInit() {
  }

  onFrmSub(myFrm?: NgForm) {
    console.log(myFrm.form);
    //console.log(this.dtFrm);
  }
}
