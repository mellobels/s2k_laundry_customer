import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
<<<<<<< HEAD
  const token = window.localStorage.getItem('token');
  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

=======
  // debugger
  const token = window.localStorage.getItem('token');

  const cloneReq = req.clone({
    setHeaders:{
      Authorization : `Bearer ${token}`
    }
  })
>>>>>>> e01d224bc8a9355ad4aec57efbbe6f9cbd90fe44
  return next(cloneReq);
};
