import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule }   from '@angular/common/http';
import * as cmp from './index';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [cmp.LoginComponent, cmp.RegisterComponent],
    exports: [cmp.LoginComponent, cmp.RegisterComponent]
})
export class AuthModule {
}