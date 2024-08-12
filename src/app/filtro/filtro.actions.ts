import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'Todos' | 'Completados' | 'Pendientes'

export const setFiltro = createAction(
  '[FILTRO] SET Filtro',
  props<{filtro:filtrosValidos}>()
);
