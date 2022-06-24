import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './../header/header.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDicionarioRoutingModule } from './view-dicionario-routing.module';
import { ViewDicionarioComponent } from './view-dicionario.component';
import { AlphabetFilterModule } from 'alphabet-filter';


@NgModule({
  declarations: [
    ViewDicionarioComponent,
  ],
  imports: [
    CommonModule,
    ViewDicionarioRoutingModule,
    MaterialModule,
    AlphabetFilterModule,
    HeaderModule,
    HttpClientModule

  ],
  exports:[
    ViewDicionarioComponent
  ]
})
export class ViewDicionarioModule { }
