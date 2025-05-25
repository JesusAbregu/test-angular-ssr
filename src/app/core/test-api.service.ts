import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  constructor(private http: HttpClient) {}

  getFakeData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      delay(2000) // Simulamos 2 segundos de "carga"
    );
  }
}
