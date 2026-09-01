import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1 } from '../../componentes/componente1/componente1';

const routes: Routes = [
  {
    path: 'componente',
    component: Componente1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiModuloRoutingModule {}
