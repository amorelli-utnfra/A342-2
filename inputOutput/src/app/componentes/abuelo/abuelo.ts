import { Component, input, OnInit, signal } from '@angular/core';
import { Data } from '../../servicios/data';
import { Padre } from "../padre/padre";

@Component({
  imports: [Padre],
  selector: 'app-abuelo',
  styleUrl: './abuelo.css',
  templateUrl: './abuelo.html',
})
export class Abuelo implements OnInit {

  datoAbuelo = signal(0);
  miDato = input<number>()

  constructor(private data: Data) {}

  ngOnInit() {
  }

  sumar() {
    this.data.incrementar();
  }

}
