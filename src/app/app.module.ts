import { HeaderModule } from './header/header.module';
import { NewDicionarioModule } from './new-dicionario/new-dicionario.module';
import { ViewDicionarioModule } from './view-dicionario/view-dicionario.module';
import { HomeDicionarioModule } from './home-dicionario/home-dicionario.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    HomeDicionarioModule,
    ViewDicionarioModule,
    NewDicionarioModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
