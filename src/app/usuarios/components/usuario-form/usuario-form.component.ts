// src/app/usuarios/components/usuario-form/usuario-form.component.ts
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  // styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  usuario: Usuario = { id: 0, nombre: '', apellido: '', email: '', rol: '' };

  constructor(private usuarioService: UsuarioService) {}

  guardarUsuario(): void {
    this.usuarioService. guardarUsuario((this.usuario).subscribe(() => {
      alert('Usuario guardado');
    });
  }
}