import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[nvBr]'
})
export class NavBarDirective {

  @HostBinding('class.open')
  nvCls: boolean;
  constructor() { }

  @HostListener('click')
  clickOn() {
    this.nvCls = true;
  }

  @HostListener('mouseleave') clickOf() {
    this.nvCls = false;
  }
}
