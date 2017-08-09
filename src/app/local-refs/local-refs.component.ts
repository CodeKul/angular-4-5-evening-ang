import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {

  private nm: string;

  @ViewChild('myNm')
  private myNm: ElementRef;

  @ContentChild('hello')
  private hello: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.nm = this.myNm.nativeElement.value + this.hello.nativeElement.value;
  }
}
