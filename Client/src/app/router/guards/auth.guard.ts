import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthState, isAuthenticatedSelector } from "../../store/auth";

@Injectable()
export class AuthGuard implements CanActivate {
    private isAuthenticated$: Observable<boolean>;

    constructor(private authStore: Store<{auth: AuthState}>) {
        this.isAuthenticated$ = this.authStore.pipe(select(isAuthenticatedSelector));
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {    
        return this.isAuthenticated$;
    }
}