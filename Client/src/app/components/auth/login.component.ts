import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthState, login as loginAction } from "../../store/auth";


@Component({
    selector: "login-form",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {   
    loginForm: FormGroup= new FormGroup({
        "userName": new FormControl("", [
            Validators.required
        ]),
        "userPassword": new FormControl("", [
            Validators.required
        ])
    });
    
    authStore$: Observable<AuthState>;

    constructor(       
        private router: Router,
        private store: Store<{ auth: AuthState }>){

        this.authStore$ = this.store.select("auth");
    }

    ngOnInit(): void {
        this.authStore$.subscribe(state => {
            if (state.isAuthenticated) {
                this.goToHome();
            } else if (state.errorMessage) {                
                this.showAlert(`The user wasn't authenticated (error: '${state.errorMessage}')`);                           
            }
        });
    }

    submit() {
        let userName = this.loginForm.controls['userName'].value;
        let userPassword = this.loginForm.controls['userPassword'].value;

        this.store.dispatch(loginAction({userName, userPassword}));        
    }

    goToHome() {
        this.router.navigate(['']);
    }

    showAlert(message: string){
        alert(message);
    }
}