import { MaterialModule } from './../material/material.module';
import { HeaderModule } from './../header/header.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDicionarioRoutingModule } from './new-dicionario-routing.module';
import { NewDicionarioComponent } from './new-dicionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewDicionarioComponent
  ],
  imports: [
    CommonModule,
    NewDicionarioRoutingModule,
    RouterModule,
    HeaderModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[NewDicionarioComponent]
})
export class NewDicionarioModule { }
