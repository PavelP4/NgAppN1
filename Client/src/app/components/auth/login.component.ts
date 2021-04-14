import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services";

@Component({
    selector: "login-form",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {   
    loginForm: FormGroup;
    
    constructor(private authService: AuthService, private router: Router){
        this.loginForm = new FormGroup({
            "userName": new FormControl("", [
                Validators.required
            ]),
            "userPassword": new FormControl("", [
                Validators.required
            ])
        });
    }

    submit() {
        let userName = this.loginForm.controls['userName'].value;
        let userPassword = this.loginForm.controls['userPassword'].value;

        this.authService.authenticate(userName, userPassword).subscribe(token => {
            if (token) {
                this.goToHome();
            } else {
                this.showAlert("The user wasn't authenticated");
            }
        },
        error => {
            this.showAlert(`The user wasn't authenticated (error: ${error.message})`);
        });
    }

    goToHome() {
        this.router.navigate(['']);
    }

    showAlert(message: string){
        alert(message);
    }
}