import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myFrm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myFrm = this.fb.group({
      usNm: ['', Validators.required],
      eml: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onFrmSubmit() {
    console.log(this.myFrm);
  }
}
