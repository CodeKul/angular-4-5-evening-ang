import { FrontendService } from './service/frontend.service';
import { BackendService } from './service/backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { DrectivesComponent } from './drectives/drectives.component';
import { MyAttrDirDirective } from './drectives/my-attr-dir.directive';
import { NavBarDirective } from './drectives/nav-bar.directive';
import { NavBarCompComponent } from './drectives/nav-bar-comp.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ExtraTabComponent } from './drectives/extra-tab.component';
import { RatingModule } from 'ng2-rating';
import { CustStrDirDirective } from './drectives/cust-str-dir.directive';
import { ServiceComponent } from './service/service.component';
import { FormsComponent } from './forms/forms.component';
import { TempDrivenComponent } from './forms/temp-driven.component';
import { DataDrivenComponent } from './forms/data-driven.component';
import { PipesComponent } from './pipes/pipes.component';
import { AsciiPipe } from './pipes/ascii.pipe';
import { MobileFilterPipe } from './pipes/mobile-filter.pipe';
import { HttpComponent } from './http/http.component';
import { HttpModule } from '@angular/http';

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
    ContentComponent,
    ContentProjectionComponent,
    LocalRefsComponent,
    DrectivesComponent,
    MyAttrDirDirective,
    NavBarDirective,
    NavBarCompComponent,
    ExtraTabComponent,
    CustStrDirDirective,
    ServiceComponent,
    FormsComponent,
    TempDrivenComponent,
    DataDrivenComponent,
    PipesComponent,
    AsciiPipe,
    MobileFilterPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2TableModule,
    RatingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [BackendService, FrontendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
