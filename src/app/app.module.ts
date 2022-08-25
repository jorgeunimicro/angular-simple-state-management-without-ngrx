import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ForceManagerModule } from './force-manager/force-manager.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ForceManagerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
