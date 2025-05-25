import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(@Inject(LoadingService) private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();

    return next.handle(req).pipe(
      tap(
        event => {},
        error => {
          this.loadingService.hide();
        },
        () => {
          this.loadingService.hide();
        }
      )
    );
  }
}

