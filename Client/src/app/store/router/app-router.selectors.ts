import * as fromRouter from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { AppStoreState } from '../.';

export const getRouterState = (state: AppStoreState) => state.router;

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => state.state
);