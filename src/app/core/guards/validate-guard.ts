import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Connection } from 'src/app/intranet/connection';

/**
 * 
 * Guard that allows you to validate whether a user has logged in or not depending on the URL
 * 
 * @param route 
 * @param state 
 * @returns 
 */
export const validateGuard: CanActivateFn = (route, state) => {
  const connectionSer = inject(Connection);
  const router = inject(Router);

  if(state.url === '/login'){
    if(connectionSer.db.getItem("userNameIonic")) {
      return router.navigate(['/home']);
    }
  }
  if(state.url === '/home'){
    if(!connectionSer.db.getItem("userNameIonic")) {
      return router.navigate(['/login']);
    }
  }
  return true;
};
