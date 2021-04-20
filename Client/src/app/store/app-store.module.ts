import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { appStoreReducers } from "./index";
import { AppRouterSerializer } from "./router";

@NgModule({
    imports: [StoreModule]
})
export class AppStoreModule {
    static forRoot() {
        return StoreModule.forRoot(appStoreReducers);
    }

    static forRouterRoot() {
        return StoreRouterConnectingModule.forRoot({
            serializer: AppRouterSerializer
        });
    }
}