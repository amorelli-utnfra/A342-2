import { Component, input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  imports: [],
  selector: 'app-mostrar-usuario',
  styleUrl: './mostrar-usuario.css',
  templateUrl: './mostrar-usuario.html',
})
export class MostrarUsuario {

  usuario = input<Usuario>();
  
}
