import { NgModule, OnDestroy }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRouterModule } from './router';
import * as cmp from './components';
import * as svc from './services';
import * as grd from './router/guards';
import { AuthModule } from './components/auth';
import { AppStoreModule } from './store/app-store.module';
import { AppEffectsModule } from './store/app-effects.module';
import { WarehouseModule } from './components/warehouse'
import { AppStoreState } from './store';
import { Store } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

const appModuleComponents = [ 
    cmp.AppComponent, 
    cmp.AboutComponent, 
    cmp.NotFoundComponent, 
    cmp.HomeComponent, 
    cmp.AppNavComponent, 
    cmp.AppFooterComponent, 
    cmp.AppSpinnerComponent 
];

const appModuleProviders = [ 
    svc.AuthService, 
    svc.AppSettingsService,
    svc.RouterExtService,
    grd.AuthGuard
];

const appModuleModules = [
    AppRouterModule.forRoot(), 
    AuthModule, 
    AppStoreModule.forRoot(), 
    AppEffectsModule.forRoot(),
    AppStoreModule.forRouterRoot(),
    WarehouseModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
];


@NgModule({
    imports:        [ BrowserModule, FormsModule, ReactiveFormsModule, ...appModuleModules ],
    declarations:   [ ...appModuleComponents ],
    providers:      [ ...appModuleProviders ],
    bootstrap:      [ cmp.AppComponent ]
})
export class AppModule { 
    constructor(
        private routeExtSvc: svc.RouterExtService,
        private storeState: Store<AppStoreState>){

        //storeState.pipe(select(getRouterState)).subscribe(state => console.log("RouterState", state));
    }    
}