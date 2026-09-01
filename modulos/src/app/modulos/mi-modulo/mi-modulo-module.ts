import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiModuloRoutingModule } from './mi-modulo-routing-module';
import { Componente1 } from '../../componentes/componente1/componente1';
import { FormsModule } from '@angular/forms';
import { Componente2 } from '../../componentes/componente2/componente2';

@NgModule({
  declarations: [Componente1, Componente2],
  imports: [CommonModule, MiModuloRoutingModule, FormsModule ],
  exports: [Componente1, Componente2],
})
export class MiModuloModule {}
