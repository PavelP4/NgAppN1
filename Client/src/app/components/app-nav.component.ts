import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-nav",
    templateUrl: "./app-nav.component.html"
})
export class AppNavComponent {

    constructor(private router: Router) {

    }

    loginUser() {
        this.router.navigate(['login']);
    }

    registerUser() {
        this.router.navigate(['register']);
    }
}