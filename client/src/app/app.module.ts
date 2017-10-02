import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routes} from './routes';
import {PhoneService} from './services/phone.service';

import { FileUploadModule } from "ng2-file-upload";

import { AddPhoneComponent } from './add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
