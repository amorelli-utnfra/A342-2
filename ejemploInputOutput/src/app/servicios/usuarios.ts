import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Usuario } from '../models/usuario';

@Service()
export class Usuarios {
    http = inject(HttpClient);

    getUsuarios() {
        return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
    }
}
