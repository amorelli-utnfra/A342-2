import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rutas');

  constructor(private router: Router) {
  }

  navegar() {
    this.router.navigate(['/items']);
  }


}
