import { Service } from '@angular/core';

@Service()
export class ApiClient {
  usernames = ['usuario1', 'usuario2', 'usuario3', 'usuario4'];

  async getUsuario(username: string) {
    // delay simulado
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const usuarioEncontrado = this.usernames.find((e) => e === username);
    return usuarioEncontrado || null;
  }
}
