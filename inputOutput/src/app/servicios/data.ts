import { Service, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class Data {
    datosServicio = new BehaviorSubject<number>(0);

    incrementar() {
        this.datosServicio.next(this.datosServicio.value + 1);
    }
}
