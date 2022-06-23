import { HeaderModule } from './../header/header.module';
import { RouterModule } from '@angular/router';
import { HomeDicionarioComponent } from './home-dicionario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HomeDicionarioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HeaderModule
  ],
  exports:[HomeDicionarioComponent]
})
export class HomeDicionarioModule { }
