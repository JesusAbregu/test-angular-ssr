import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class LoadingService {
  // Estado interno del loading como observable booleano
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // Observable que otros componentes pueden suscribirse para mostrar/ocultar spinner
  loading$ = this.loadingSubject.asObservable();

  // Activa el estado de carga (muestra el spinner)
  show(): void {
    this.loadingSubject.next(true);
  }

  // Desactiva el estado de carga (oculta el spinner)
  hide(): void {
    this.loadingSubject.next(false);
  }
}
