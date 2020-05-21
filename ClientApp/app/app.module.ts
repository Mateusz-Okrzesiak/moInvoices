import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './components/customer/customer.component';
import { AppComponent } from './components/app/app.component';
import { DocumentComponent } from './components/document/document.component';

import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'document', component: DocumentComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
