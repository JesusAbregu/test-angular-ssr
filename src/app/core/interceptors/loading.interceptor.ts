import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../../loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return next.handle(req).pipe(finalize(() => this.loadingService.hide()));
  }
}
// // src/app/loading/loading.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
//