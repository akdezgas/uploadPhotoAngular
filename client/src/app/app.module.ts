import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
