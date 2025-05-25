// src/app/usuarios/store/usuarios.actions.ts
import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';

// Definir acciones de usuario
export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);
export const cargarUsuariosFailure = createAction(
  '[Usuarios] Cargar Usuarios Failure',
  props<{ error: string }>()
);

export const crearUsuario = createAction(
  '[Usuarios] Crear Usuario',
  props<{ usuario: Usuario }>()
);
export const crearUsuarioSuccess = createAction(
  '[Usuarios] Crear Usuario Success',
  props<{ usuario: Usuario }>()
);
export const crearUsuarioFailure = createAction(
  '[Usuarios] Crear Usuario Failure',
  props<{ error: string }>()
);

export const actualizarUsuario = createAction(
  '[Usuarios] Actualizar Usuario',
  props<{ usuario: Usuario }>()
);
export const actualizarUsuarioSuccess = createAction(
  '[Usuarios] Actualizar Usuario Success',
  props<{ usuario: Usuario }>()
);
export const actualizarUsuarioFailure = createAction(
  '[Usuarios] Actualizar Usuario Failure',
  props<{ error: string }>()
);

export const eliminarUsuario = createAction(
  '[Usuarios] Eliminar Usuario',
  props<{ id: number }>()
);
export const eliminarUsuarioSuccess = createAction(
  '[Usuarios] Eliminar Usuario Success',
  props<{ id: number }>()
);
export const eliminarUsuarioFailure = createAction(
  '[Usuarios] Eliminar Usuario Failure',
  props<{ error: string }>()
);
