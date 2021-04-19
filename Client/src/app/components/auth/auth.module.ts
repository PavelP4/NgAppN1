import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule }   from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [LoginComponent, RegisterComponent],
    exports: [LoginComponent, RegisterComponent]
})
export class AuthModule {
}