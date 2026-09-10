import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../servicios/auth';

export const childGuard: CanActivateChildFn = (childRoute, state) => {

  const auth = inject(Auth);
  const user = auth.getCurrentUser();

  if(!user || user.view !== 'detalle') {
    console.log('Access denied: user does not have the required view.');
      return false;
  }
  return true;
};
