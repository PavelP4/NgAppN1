import { createSelector } from '@ngrx/store';
import {AppSpinnerState, AppState} from './app.reducer';

const appSpinnerState = (state: {app: AppState}) => state.app.appSpinner;
export const selectIsShowSpinner = createSelector(appSpinnerState, (state: AppSpinnerState) => state.isShowSpinner);