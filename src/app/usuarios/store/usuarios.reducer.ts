// src/app/usuarios/store/usuarios.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';
import * as UsuariosActions from './usuarios.actions';

export interface State {
  usuarios: Usuario[];
  error: string;
  loading: boolean;
}

export const initialState: State = {
  usuarios: [],
  error: '',
  loading: false,
};

export const usuariosReducer = createReducer(
  initialState,
  on(UsuariosActions.cargarUsuarios, (state) => ({
    ...state,
    loading: true,
  })),
  on(UsuariosActions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    usuarios,
    loading: false,
  })),
  on(UsuariosActions.cargarUsuariosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UsuariosActions.crearUsuario, (state) => ({
    ...state,
    loading: true,
  })),
  on(UsuariosActions.crearUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    usuarios: [...state.usuarios, usuario],
    loading: false,
  })),
  on(UsuariosActions.crearUsuarioFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UsuariosActions.actualizarUsuario, (state) => ({
    ...state,
    loading: true,
  })),
  on(UsuariosActions.actualizarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    usuarios: state.usuarios.map((u) =>
      u.id === usuario.id ? { ...u, ...usuario } : u
    ),
    loading: false,
  })),
  on(UsuariosActions.actualizarUsuarioFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UsuariosActions.eliminarUsuario, (state) => ({
    ...state,
    loading: true,
  })),
  on(UsuariosActions.eliminarUsuarioSuccess, (state, { id }) => ({
    ...state,
    usuarios: state.usuarios.filter((usuario) => usuario.id !== id),
    loading: false,
  })),
  on(UsuariosActions.eliminarUsuarioFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
