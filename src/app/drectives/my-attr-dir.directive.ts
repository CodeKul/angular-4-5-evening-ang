import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myAttr]'
})
export class MyAttrDirDirective {

  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
  ) {
    //this.elRef.nativeElement.style.border = '1px solid red';
    this.rend.setStyle(this.elRef.nativeElement, 'border', '1px solid red');
  }

}
