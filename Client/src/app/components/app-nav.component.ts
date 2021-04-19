import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AuthState, isAuthenticatedSelector, logout } from "../store/auth";

@Component({
    selector: "app-nav",
    templateUrl: "./app-nav.component.html",
    styleUrls: ["./app-nav.component.scss"]
})
export class AppNavComponent implements OnInit, OnDestroy {
    private scr: Subscription = new Subscription();

    private authState$: Observable<AuthState>;
    public isAuthenticated$: Observable<boolean>;
    
    isLoggedin: boolean;
    currentUserName: string;

    constructor(private router: Router, private authStore: Store<{ auth: AuthState }>) {
        this.authState$ = authStore.select('auth');
        this.isAuthenticated$ = this.authStore.pipe(select(isAuthenticatedSelector));
    }

    ngOnInit(): void {
        let s = this.authState$.subscribe(auth => {
            if (this.isLoggedin && !auth.isAuthenticated) {
                this.goToHome();
            }

            this.isLoggedin = auth.isAuthenticated;
            this.currentUserName = auth.userName;
        }); 
        this.scr.add(s);
    }

    ngOnDestroy(): void {
        this.scr.unsubscribe();
    }

    get loginButtonText() {
        return this.isLoggedin ? "Logout" : "Login";
    };

    loginUser() {
        this.router.navigate(['login']);
    }

    logoutUser() {
        this.authStore.dispatch(logout());
    }

    registerUser() {
        this.router.navigate(['register']);
    }

    goToHome() {
        this.router.navigate(['']);
    }
}