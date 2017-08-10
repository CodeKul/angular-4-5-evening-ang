import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myAttr]'
})
export class MyAttrDirDirective {

  @Input('myAttr')
  @HostBinding('style.border')
  brd: string;

  @HostListener('mouseenter')
  inTheBox() {
    this.brd = '1px solid red';
  }

  @HostListener('mouseleave')
  outOfBox() {
    this.brd = '1px solid blue';
  }

  // @HostBinding('class.well')
  // wll: boolean;

  constructor(
    // private elRef: ElementRef,
    // private rend: Renderer2
  ) {
    //this.elRef.nativeElement.style.border = '1px solid red';
    //this.rend.setStyle(this.elRef.nativeElement, 'border', '1px solid red');

    this.brd = '1px solid blue';
    // this.wll = true;
  }
}
