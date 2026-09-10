import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../servicios/auth';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);

  const currentUser = auth.getCurrentUser(); // Replace with actual authentication check logic
  console.log("auth");
  
  if (currentUser) {
    return true;
  }
   router.navigate(['/login']);
  return false;
};
