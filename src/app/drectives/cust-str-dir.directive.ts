import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustStrDir]'
})
export class CustStrDirDirective implements OnChanges {

  @Input()
  appCustStrDir: boolean;

  constructor(
    private vcRef: ViewContainerRef,
    private tmRef: TemplateRef<any>
  ) {
  }

  ngOnChanges(): void {
    if (!this.appCustStrDir) {
      this.vcRef.createEmbeddedView(this.tmRef);
    } else {
      this.vcRef.clear();
    }
  }
}
