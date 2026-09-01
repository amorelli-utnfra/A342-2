import { Component, signal } from '@angular/core';
import { Hijo } from "../hijo/hijo";
import { FormsModule } from '@angular/forms';
import { Hijo2 } from "../hijo2/hijo2";

@Component({
  imports: [Hijo, FormsModule, Hijo2],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {

  valor = signal("");

  modeloDelHijo = signal("");

  recibirDato(dato: string) {
  this.valor.set(dato);
  }

  recibirDatoSignal(dato: string) {
    this.modeloDelHijo.set(dato);
    this.valor.set(dato);
  }

}
