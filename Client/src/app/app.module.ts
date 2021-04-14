import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import * as cmp from './components';
import * as svc from './services';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRouterModule.forRoot(), AuthModule ],
    declarations: [ cmp.AppComponent, cmp.AboutComponent, cmp.NotFoundComponent, cmp.HomeComponent, cmp.AppNavComponent, cmp.AppFooterComponent ],
    providers: [ svc.AuthService, svc.AppSettingsService ],
    bootstrap:    [ cmp.AppComponent ]
})
export class AppModule { }