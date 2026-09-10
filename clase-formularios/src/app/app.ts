import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormUsuarios } from './components/form-usuarios/form-usuarios';

@Component({
  imports: [RouterOutlet, FormUsuarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //
}
