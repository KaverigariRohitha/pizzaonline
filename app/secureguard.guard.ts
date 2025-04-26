import { CanActivateFn } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
export const secureguardGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem("uname")==null){
    const r=inject(Router);
    r.navigate(['login'])
  return false;
  }
  else{
    return true;
  }
};
