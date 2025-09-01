import { CanActivateFn } from '@angular/router';

export const validateGuard: CanActivateFn = (route, state) => {
  return true;
};
