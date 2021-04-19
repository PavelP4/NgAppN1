import { createAction, props } from "@ngrx/store";
import { AppSettings } from "../../models/settings";


export const loadAppSettings = createAction("[App Component] Load Settings");
export const loadAppSettingsSuccess = createAction("[AppSettings Service] Loaded successfully", props<LoadAppSettingsActionProps>());
export const loadAppSettingsFailed = createAction("[AppSettings Service] Failed loading", props<LoadAppSettingsActionProps>());

export interface LoadAppSettingsActionProps {
    appSettings: AppSettings;
}