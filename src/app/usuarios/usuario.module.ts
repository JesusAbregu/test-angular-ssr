// src/app/usuarios/usuario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListadoComponent } from './pages/usuario-listado/usuario-listado.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    UsuarioListadoComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
// src/app/usuarios/services/usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    constructor(private http: HttpClient) { }
    
    getUsuarios(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
    
    getUsuario(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    
    createUsuario(usuario: any): Observable<any> {
        return this.http.post(this.apiUrl, usuario);
    }
    
    updateUsuario(usuario: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${usuario.id}`, usuario);
    }
    
    deleteUsuario(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    }
// src/app/usuarios/models/usuario.model.ts
export interface Usuario {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;

        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

    createdAt: Date;
    updatedAt: Date;
}
// src/app/usuarios/pages/usuario-listado/usuario-listado.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioFormComponent } from '../../components/usuario-form/usuario-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
    styleUrls: ['./usuario-listado.component.css']
