import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./auth";
import { settingsReducer } from "./settings";
import { appReducer } from "./app";

@NgModule({
    imports: [StoreModule]
})
export class AppStoreModule {
    static forRoot() {
        return StoreModule.forRoot({
            auth: authReducer,
            settings: settingsReducer,
            app: appReducer
        });
    }
}