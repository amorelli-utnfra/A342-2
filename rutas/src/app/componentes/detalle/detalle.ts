import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-detalle',
  styleUrl: './detalle.css',
  templateUrl: './detalle.html',
})
export class Detalle implements OnInit {

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  itemEncontrado = signal<{ id: number, name: string } | null>({ id: 1, name: 'Item 1' });

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {




    // Snapshot es una foto de los parámetros de la ruta en el momento en que se accede a este componente. No se actualiza automáticamente si los parámetros cambian mientras el componente está activo. Por eso, si quieres reaccionar a cambios en los parámetros de la ruta mientras el componente está activo, deberías suscribirte a los cambios de parámetros usando `this.route.paramMap.subscribe(...)`. Sin embargo, si solo te interesa obtener el valor inicial cuando se carga el componente, `snapshot` es suficiente.
    // const id = this.route.snapshot.paramMap.get('id');
    // this.setearId(id ? +id : 0);


    // paramMap es un observable que emite un nuevo valor cada vez que cambian los parámetros de la ruta. Esto es útil si el componente permanece activo mientras los parámetros cambian, ya que te permite reaccionar a esos cambios y actualizar el estado del componente en consecuencia.

    this.route.paramMap.subscribe(params => {

      console.log("Cambio de parámetros de ruta:", params);

      const id = params.get('id');

      this.setearId(id ? +id : 0);
    });


    // this.route.queryParamMap.subscribe(params => {

    //   console.log("Cambio de parámetros de ruta:", params);

    //   const id = params.get('id');

    //   this.setearId(id ? +id : 0);
    // });


    // queryParams es igual que queryParamMap, pero devuelve un objeto simple en lugar de un Map. Esto puede ser más conveniente si solo necesitas acceder a los valores de los parámetros sin preocuparte por la estructura del Map.

    // this.route.queryParams.subscribe(params => {

    //   console.log("Cambio de parámetros de ruta:", params);

    //   const id = params['id'];

    //   this.setearId(id ? +id : 0);
    // });

  }

  setearId(id: number) {
    const item = this.items.find(i => i.id === id);

    if (item) {
      this.itemEncontrado.set(item);
      console.log('Item encontrado:', item);
    } else {
      console.log('Item no encontrado');
      this.itemEncontrado.set(null);
    }
  }


}
