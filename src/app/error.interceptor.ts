import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

<<<<<<< HEAD
  return next(req).pipe(catchError((err:any)=> {
    if([401,403].includes(JSON.parse(err.status))){
      router.navigate(['login']);
    }
    const e = err.error.status || err.statusText
    
    return throwError(()=> e);
  }))
=======
  return next(req).pipe(catchError((err:any)=>{
    if([401,403].includes(JSON.parse(err.status))){
      router.navigate(['cus-login']);
      console.log("AYAW BA");
    }
    const e = err.error.status || err.statusText

    return throwError(()=> e);
  }))

>>>>>>> e01d224bc8a9355ad4aec57efbbe6f9cbd90fe44
};
