import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  nm = 'codekul.com';

  constructor() { }

  mkUpr() { return this.nm.toUpperCase(); }
}
