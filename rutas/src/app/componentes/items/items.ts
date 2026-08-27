import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-items',
  styleUrl: './items.css',
  templateUrl: './items.html',
})
export class Items {

  constructor(private router: Router) {}

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  navegar(id: number) {
    
      this.router.navigate(['detalle', id]);

      // Si quiesiera enviar el id como parámetro de consulta en lugar de como parte de la ruta, podrías usar:
      // this.router.navigate(['detalle'], { queryParams: { id: id } });
  }
}
