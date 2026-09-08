import { Component, OnInit, signal } from '@angular/core';
import { Usuario } from './models/usuario';
import { Usuarios } from './servicios/usuarios';
import { CardUsuario } from './componentes/card-usuario/card-usuario';
import { MostrarUsuario } from './componentes/mostrar-usuario/mostrar-usuario';

@Component({
  imports: [CardUsuario, MostrarUsuario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  usuarios = signal<Usuario[]>([]);
  usuarioSeleccionado = signal<Usuario | null>(null);

  constructor(private usuariosService: Usuarios) {}

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((usuarios) => {
      this.usuarios.set(usuarios);
    });
  }

  recibirUsuario(usuario: Usuario) {
    this.usuarioSeleccionado.set(usuario);
  }
}
