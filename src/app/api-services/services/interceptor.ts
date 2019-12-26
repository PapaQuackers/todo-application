import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method
    
       const user = JSON.parse(localStorage.getItem('user')) as User;
       let token = null;
       if(user){
        token = user.token;
       }
       

       let newHeaders = req.headers;
       if(token){
        newHeaders = newHeaders.append('Authorization', `Bearer ${token}`);
       }

       newHeaders = newHeaders.append('Content-Type', 'application/json')

       const authReq = req.clone({headers: newHeaders});
       return next.handle(authReq);
    return next.handle(req)
   }
}