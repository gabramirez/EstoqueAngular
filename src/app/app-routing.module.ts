import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoquesComponent } from './estoques/estoques.component';

const routes: Routes = [{
  path: 'estoques',
  component:EstoquesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
