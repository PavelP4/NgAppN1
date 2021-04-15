import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthState, logout } from "../store/auth";

@Component({
    selector: "app-nav",
    templateUrl: "./app-nav.component.html",
    styleUrls: ["./app-nav.component.scss"]
})
export class AppNavComponent implements OnInit {

    private authState$: Observable<AuthState>;
    
    isLoggedin: boolean;
    currentUserName: string;

    constructor(private router: Router, private store: Store<{ auth: AuthState }>) {
        this.authState$ = store.select('auth');
    }

    ngOnInit(): void {
        this.authState$.subscribe(auth => {
            this.isLoggedin = auth.isAuthenticated;
            this.currentUserName = auth.userName;
        }); 
    }

    get loginButtonText() {
        return this.isLoggedin ? "Logout" : "Login";
    };

    loginUser() {
        this.router.navigate(['login']);
    }

    logoutUser() {
        this.store.dispatch(logout());
    }

    registerUser() {
        this.router.navigate(['register']);
    }
}