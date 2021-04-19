import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/auth/user";
import { AuthService } from "../../services";
import { Subscription } from "rxjs";

@Component({
    selector: "register-form",
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnDestroy {    
    private scr: Subscription = new Subscription();

    registerForm: FormGroup;
    
    constructor(private authService: AuthService, private router: Router){

        this.registerForm = new FormGroup({
            "firstName": new FormControl("",[
                Validators.maxLength(50)
            ]),
            "lastName": new FormControl("", [
                Validators.maxLength(50)
            ]),
            "login": new FormControl("", [
                Validators.required
            ]),
            "password": new FormControl("", [
                Validators.required
            ]),
            "confirmPassword": new FormControl("", [
                Validators.required,
                this.checkPasswords
            ]),
            "email": new FormControl("", [
                Validators.required,
                Validators.email
            ])
        });
    }

    ngOnDestroy(): void {
        this.scr.unsubscribe();
    }

    checkPasswords(control: FormControl): {[s:string]:boolean} {
        const fg = control.parent as FormGroup;
        if (!fg) return null;

        const password = fg.controls['password'].value;
        const confirmPassword = control.value;
      
        return password === confirmPassword ? null : { 'confirmPassword': true }     
      }

    submit() {
        let user = new User();
        user.firstName = this.registerForm.controls['firstName'].value;
        user.lastName = this.registerForm.controls['lastName'].value;
        user.login = this.registerForm.controls['login'].value;
        user.password = this.registerForm.controls['password'].value;
        user.email = this.registerForm.controls['email'].value;      

        let subscription = this.authService.register(user).subscribe(userId => {
            if (userId && userId > 0) {
                this.goToLogin();
            } else {
                this.showAlert("The user wasn't created");
            }
        },
        error => {
            this.showAlert(`The user wasn't created (error: ${error.message})`);
        });
        this.scr.add(subscription);
    }

    goToLogin(){
        this.router.navigate(['login']);
    }

    showAlert(message: string){
        alert(message);
    }
}