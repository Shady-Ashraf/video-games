import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeadersIntercaptor implements HttpInterceptor {
    constructor () {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req = req.clone({
        //     setHeaders: {
        //         'x-rapidapi-key': 'c6263838ec9c49de8074f92d6b191bc8',
        //         'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        //     },
        //     setParams: {
        //         key: 'c6263838ec9c49de8074f92d6b191bc8'
        //     }
        // })

        req = req.clone({
            setParams: {
                key: 'c6263838ec9c49de8074f92d6b191bc8'
            }
        })

        return next.handle(req)
    }
}