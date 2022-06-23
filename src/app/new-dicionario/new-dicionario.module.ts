import { HeaderModule } from './../header/header.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDicionarioRoutingModule } from './new-dicionario-routing.module';
import { NewDicionarioComponent } from './new-dicionario.component';


@NgModule({
  declarations: [
    NewDicionarioComponent
  ],
  imports: [
    CommonModule,
    NewDicionarioRoutingModule,
    RouterModule,
    HeaderModule
  ],
  exports:[NewDicionarioComponent]
})
export class NewDicionarioModule { }
