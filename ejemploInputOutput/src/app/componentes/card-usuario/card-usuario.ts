import { Component, input, output } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  imports: [],
  selector: 'app-card-usuario',
  styleUrl: './card-usuario.css',
  templateUrl: './card-usuario.html',
})
export class CardUsuario {

  usuario = input<Usuario>();
  selected = output<Usuario>();

  seleccionar() {
    this.selected.emit(this.usuario()!);
  }

}
