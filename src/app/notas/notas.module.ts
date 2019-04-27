import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {EstudiantesPage} from './estudiantes/estudiantes.page';
import {ProfesoresPage} from './profesores/profesores.page';
import { NotasRoutingModule} from './notas-routing.module';




@NgModule({
  declarations: [
      EstudiantesPage,
      ProfesoresPage
  ],
  imports: [
    CommonModule,
    NotasRoutingModule
  ],
})
export class NotasPageModule {}
