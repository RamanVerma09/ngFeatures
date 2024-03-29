import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './features/element/element.component';
import { TemplatesComponent } from './features/templates/templates.component';
import { ChildTemplateComponent } from './features/child-template/child-template.component';
import { RxjsOperatorsComponent } from './features/rxjs-operators/rxjs-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    TemplatesComponent,
    ChildTemplateComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
