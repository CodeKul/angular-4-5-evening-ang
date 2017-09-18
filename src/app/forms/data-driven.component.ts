import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs/Observable";

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
      usNm: ['', Validators.required , this.codekulAsyncValidator],
      eml: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      pass: ['', Validators.compose([
        Validators.required,
        this.length10
      ])]
    });
  }

  onFrmSubmit() {
    console.log(this.myFrm);
  }

  length10(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 10 ? null : { myErr: 'Check the length' };
  }

  codekulAsyncValidator(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | null {
    return control.value === 'codekul' ? new Promise<ValidationErrors | null>(
      (res, rej) => setTimeout( () => res(null), 1000)
    ) : new Promise<ValidationErrors | null>(
      (res, rej) => setTimeout( () => res({ myErr : 'Promise returned error'}), 1000)
    );
  }
}
