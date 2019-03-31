import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PreviewComponent } from './preview/preview.component';
import { ThumbComponent } from './thumb/thumb.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PreviewComponent, ThumbComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
