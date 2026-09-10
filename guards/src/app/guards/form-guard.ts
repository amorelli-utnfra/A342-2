import { CanDeactivateFn } from '@angular/router';
import { Registro } from '../componentes/registro/registro';

export const formGuard: CanDeactivateFn<Registro> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {

  if (component.form.invalid) {
    return confirm('El formulario no es válido. ¿Desea salir de todos modos?');
  }
  return true;
};
