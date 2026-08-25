import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-mi-componente',
  styleUrl: './mi-componente.css',
  templateUrl: './mi-componente.html',
})
export class MiComponente {

   miDato = signal('valor inicial');

  constructor() {
    console.log('MiComponente constructor');
  }

  protected cambiarValor(nuevoValor: string) {
    this.miDato.set(nuevoValor);
  }

}
