import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../servicios/auth';
export const roleGuard: CanMatchFn = (route, segments) => {

  const auth = inject(Auth);
  const user = auth.getCurrentUser();
  console.log("role");
  
  
  if(!user || user.role !== 'vendedor') {
      return false;
  }
  return true;
};
