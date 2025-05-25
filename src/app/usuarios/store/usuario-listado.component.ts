// src/app/usuarios/store/usuarios.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './usuarios.reducer';
import { Usuario } from '../models/usuario.model';

export const selectUsuariosState = createFeatureSelector<State>('usuarios');

export const selectUsuarios = createSelector(
  selectUsuariosState,
  (state: State): Usuario[] => state.usuarios
);

export const selectUsuariosLoading = createSelector(
  selectUsuariosState,
  (state: State): boolean => state.loading
);

export const selectUsuariosError = createSelector(
  selectUsuariosState,
  (state: State): string => state.error
);


