import { Action, createReducer, on } from "@ngrx/store";
import * as appActions from "./app.actions";


export const initialAppState: AppState = {
    appSpinner: {
        isShowSpinner: false
    }    
};

const _appReducer = createReducer(
    initialAppState,
    on(appActions.showSpinner, state => ({...state, appSpinner: {...(state.appSpinner), isShowSpinner: true}})),
    on(appActions.hideSpinner, state => ({...state, appSpinner: {...(state.appSpinner), isShowSpinner: false}}))
    );

export function appReducer(state: AppState | undefined, action: Action) {
    return _appReducer(state, action);
}

export interface AppState {
    appSpinner: AppSpinnerState;
}

export interface AppSpinnerState {
    isShowSpinner: boolean;
}