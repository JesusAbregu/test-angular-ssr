import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      delay(1500) // Simulamos retardo de red
    );
  }
}
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
}