import { ActionReducerMap } from "@ngrx/store";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { appReducer, AppState } from './app';
import { authReducer, AuthState } from './auth';
import { settingsReducer, SettingsState } from './settings';



export interface AppStoreState {
    auth: AuthState;
    settings: SettingsState;
    app: AppState;
    router: RouterReducerState<any>;
}

export const appStoreReducers: ActionReducerMap<AppStoreState> = {
    auth: authReducer,
    settings: settingsReducer,
    app: appReducer,
    router: routerReducer
};