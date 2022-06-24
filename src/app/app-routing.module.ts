import { HomeDicionarioComponent } from './home-dicionario/home-dicionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewDicionarioComponent } from './new-dicionario/new-dicionario.component';
import { ViewDicionarioComponent } from './view-dicionario/view-dicionario.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path:'', component:HomeDicionarioComponent},
      { path: 'view-dicionario/:diario', component: ViewDicionarioComponent },
      {
        path: 'new-dicionario',
        component: NewDicionarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
