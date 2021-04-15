import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AppSettingsService } from "./appsettings.service";
import { User } from '../models/auth/user';
import { Store } from "@ngrx/store";
import { AuthState, login as loginAction } from "../store/auth";
import { LoginResult } from "../models/auth/loginResult";

@Injectable()
export class AuthService {

    private apiBaseUrl: string = "";
    

    constructor(
        private http: HttpClient, 
        private appsettings: AppSettingsService, 
        private store: Store<{ auth: AuthState }>){       
    }

    login(name: string, password: string): Observable<LoginResult>{
        let params = new HttpParams();
        params.set("name", name);
        params.set("password", password);
       
        let res = new LoginResult();
        res.user = new User();
        res.user.login = name;
        res.token = "token123";
        return of(res);

        return this.http.get<LoginResult>(this.getUrl("authenticate"), {params});
    }

    register(user: User): Observable<number> {
        return this.http.post<number>(this.getUrl("register"), user);
    }

    private getUrl(path: string): string {
        return `${this.apiBaseUrl}/auth/${path}`;
    }
}