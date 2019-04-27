import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstudiantesPage} from './estudiantes/estudiantes.page';
import {ProfesoresPage} from './profesores/profesores.page';

const routes: Routes = [
    {path: 'estudiantes', loadChildren: './estudiantes/estudiantes.module#EstudiantesPageModule'},
    {path: 'profesores', loadChildren: './profesores/profesores.module#ProfesoresPageModule'}
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class NotasRoutingModule {};