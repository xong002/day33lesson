import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntervalComponent } from './components/interval/interval.component';
import { FormsModule } from '@angular/forms';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';
import { CardComponent } from './components/card/card.component';
import { ElementsComponent } from './components/elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalComponent,
    NgtemplateComponent,
    CardComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
