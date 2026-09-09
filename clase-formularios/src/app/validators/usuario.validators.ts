import { inject } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { ApiClient } from '../services/api-client';

// Función de validación de ejemplo
// export function clavesCoincidenValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     //
//     if (control.value === 'pepe') {
//       return { noPuedeSerPepe: 'No puede ser pepe' };
//     } else {
//       return null;
//     }
//   };
// }

// Función de validación sincrónica
export function clavesCoincidenValidator(controlACoincidir: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valorControl = control.value;
    const valorControlCoincidir = controlACoincidir.value;
    if (valorControl !== valorControlCoincidir) {
      return { losControlesNoCoinciden: true };
    } else {
      return null;
    }
  };
}

// Función de validación asincrónica
export function usuarioUnicoValidator(): AsyncValidatorFn {
  const apiClient = inject(ApiClient);
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    const usuarioEncontrado = await apiClient.getUsuario(control.value);
    if (usuarioEncontrado) {
      return { elUsuarioYaExiste: true };
    } else {
      return null;
    }
  };
}
