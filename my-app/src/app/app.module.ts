import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasicHighLightDirective} from './basic-highlight/basic-highlight.directive';
import {AppBetterHighlight} from './better-highlighter/better-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    AppBetterHighlight
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
