import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { User } from '../modelos/user';

@Service()
export class Http {
    http = inject(HttpClient);

    get(url: string) {
        return this.http.get<User[]>(url);
    }

}
