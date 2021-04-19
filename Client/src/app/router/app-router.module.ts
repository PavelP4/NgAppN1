import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import * as cmp   from '../components';
import * as cmpAuth from '../components/auth';
import * as cmpW from '../components/warehouse';
import * as grd from './guards';

const appRoutes: Routes =[
    { path: '', component: cmp.HomeComponent},
    { path: 'about', component: cmp.AboutComponent},
    { path: 'warehouse', component: cmpW.WarehouseComponent, canActivate: [grd.AuthGuard]},
    { path: 'login', component: cmpAuth.LoginComponent},
    { path: 'register', component: cmpAuth.RegisterComponent},
    { path: '**', component: cmp.NotFoundComponent }
];

@NgModule({
    imports: [RouterModule]
})
export class AppRouterModule {
    static forRoot() {
        return RouterModule.forRoot(appRoutes);
    } 
}