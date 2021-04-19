import { Action, createReducer, on } from "@ngrx/store";
import { AppSettings } from "../../models/settings";
import * as settingsActions from './settings.actions';



export const initialSettingsState: SettingsState = {
    appSettings: null,
    isAppSettingsSetUp: false
};

const _settingsReducer = createReducer(initialSettingsState,
    on(settingsActions.loadAppSettings, (state: SettingsState) => {
        return ({...state, 
            appSettings: null,
            isAppSettingsSetUp: false
        });
    }),
    on(settingsActions.loadAppSettingsSuccess, (state: SettingsState, props: settingsActions.LoadAppSettingsActionProps) => {
        return ({...state, 
            appSettings: props.appSettings,
            isAppSettingsSetUp: true
        });
    }),
    on(settingsActions.loadAppSettingsFailed, (state: SettingsState, props: settingsActions.LoadAppSettingsActionProps) => {
        return ({...state, 
            appSettings: null,
            isAppSettingsSetUp: false
        });
    }));


export function settingsReducer(state: SettingsState | undefined, action: Action) {
    return _settingsReducer(state, action);
}


export interface SettingsState {
    appSettings: AppSettings;
    isAppSettingsSetUp: boolean;
}