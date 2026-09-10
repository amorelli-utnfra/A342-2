import { NgFor } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Producto } from '../../models/producto';
import { Productos as ProductosService } from '../../servicios/productos';

@Component({
  imports: [NgFor, RouterModule],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos implements OnInit{

  productos = signal<Producto[]>([]);

  constructor(private productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.productos.set(this.productosService.getAll());
  }
}
