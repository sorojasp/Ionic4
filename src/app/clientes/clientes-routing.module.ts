import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroPage } from './registro/registro.page';
import { SolicitaReciPage } from './solicita-reci/solicita-reci.page';

const routes: Routes = [
    {path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule'},
    {path: 'clientes', loadChildren: './registro/registro.module#RegistroPageModule'},
    {path: 'solicitud', loadChildren: './solicita-reci/solicita-reci.module#SolicitaReciPageModule'},
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })



export class ClientesRoutingModule { }