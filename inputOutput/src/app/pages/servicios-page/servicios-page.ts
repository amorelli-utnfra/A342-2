import { Component } from '@angular/core';
import { ListaUsuarios } from '../../componentes/lista-usuarios/lista-usuarios';

@Component({
  imports: [ListaUsuarios],
  selector: 'app-servicios-page',
  styleUrl: './servicios-page.css',
  templateUrl: './servicios-page.html',
})
export class ServiciosPage {}
