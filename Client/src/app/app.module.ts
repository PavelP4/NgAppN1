import { NgModule, OnDestroy }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRouterModule } from './router';
import * as cmp from './components';
import * as svc from './services';
import * as grd from './router/guards';
import { AuthModule } from './components/auth';
import { AppStoreModule, AppEffectsModule } from './store';
import { WarehouseModule } from './components/warehouse'

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
    WarehouseModule
];


@NgModule({
    imports:        [ BrowserModule, FormsModule, ReactiveFormsModule, ...appModuleModules ],
    declarations:   [ ...appModuleComponents ],
    providers:      [ ...appModuleProviders ],
    bootstrap:      [ cmp.AppComponent ]
})
export class AppModule { 
    constructor(private routeExtSvc: svc.RouterExtService){}    
}