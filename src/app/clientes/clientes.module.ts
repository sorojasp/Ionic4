import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroPage } from './registro/registro.page';
import { SolicitaReciPage } from './solicita-reci/solicita-reci.page';
import {ClientesRoutingModule} from '../clientes/clientes-routing.module';

@NgModule({
    declarations: [
        RegistroPage,
        SolicitaReciPage
    ],
    imports: [
      CommonModule,
      ClientesRoutingModule
    ],
  })

  export class ClientesModule { }