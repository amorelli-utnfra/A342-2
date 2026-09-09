import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  clavesCoincidenValidator,
  usuarioUnicoValidator,
} from '../../validators/usuario.validators';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-usuarios',
  styleUrl: './form-usuarios.css',
  templateUrl: './form-usuarios.html',
})
export class FormUsuarios implements OnInit {
  controlClave = new FormControl('', {
    validators: [Validators.required],
  });

  formUsuarios = new FormGroup({
    nombre: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    }),
    apellido: new FormControl('default', {
      validators: [Validators.required],
    }),
    username: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [usuarioUnicoValidator()],
      updateOn: 'blur',
    }),
    clave: this.controlClave,
    confirmarClave: new FormControl('', {
      validators: [Validators.required, clavesCoincidenValidator(this.controlClave)],
    }),
  });

  ngOnInit(): void {
    // suscribirse a cambios del estado del formulario
    // this.formUsuarios.valueChanges.subscribe((estado) => console.log(estado));
  }

  mostrar() {
    // Formas de acceder a un control
    const apellido = this.formUsuarios.controls.apellido;
    const apellido2 = this.formUsuarios.controls['apellido'];
    const apellido3 = this.formUsuarios.get('apellido');

    // Mostrar el estado completo del formulario
    console.log(this.formUsuarios.value);

    // Limpiar el formulario
    this.formUsuarios.reset();
  }
}
