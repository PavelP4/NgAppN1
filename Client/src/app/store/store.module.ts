import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./auth";

@NgModule({
    imports: [StoreModule]
})
export class AppStoreModule {
    static forRoot() {
        return StoreModule.forRoot({auth: authReducer});
    }
}