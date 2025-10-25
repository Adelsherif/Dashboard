import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthData } from '../services/auth-data';

export const authGuard: CanActivateFn = (route, state) => {
  
  const auth  = inject (AuthData)
  const router = inject(  Router);

  if(auth.authorize()){
    return true;

  }else{
    return router.navigate(['']);
  }
};
