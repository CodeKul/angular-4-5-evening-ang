import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hello/hi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { AwesomeComponent } from './databinding/awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    DatabindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    AwesomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
