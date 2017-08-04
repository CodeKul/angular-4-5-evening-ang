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
import { InterCompComComponent } from './inter-comp-com/inter-comp-com.component';
import { InComComponent } from './databinding/in-com.component';
import { OutComComponent } from './databinding/out-com.component';
import { PanelComponent } from './inter-comp-com/panel.component';
import { ContentComponent } from './inter-comp-com/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    DatabindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    AwesomeComponent,
    InterCompComComponent,
    InComComponent,
    OutComComponent,
    PanelComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
