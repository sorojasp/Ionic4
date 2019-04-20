import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePage} from './home/home.page';
import { NotasPage } from './notas/notas.page';
import { ClientesComponent } from './clientes/clientes.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /*
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'notas', loadChildren: './notas/notas.module#NotasPageModule' },
  */
  {path: 'home', component: HomePage, pathMatch: 'full' },
  {path: 'notas', component: NotasPage, pathMatch: 'full'},
  {path: 'clientes',  loadChildren: './clientes/clientes-routing.module#ClientesRoutingModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
