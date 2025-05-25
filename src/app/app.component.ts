import { Component, OnInit } from '@angular/core';
import { TestApiService } from './core/test-api.service';
import { LoadingService } from './loading/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private api: TestApiService
  ) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
    this.api.getFakeData().subscribe(data => {
      console.log('Datos cargados:', data);
    });
  }
}
