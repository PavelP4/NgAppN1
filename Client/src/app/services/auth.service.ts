import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettingsService } from "./appsettings.service";
import { User } from '../models/auth/user';
import { Store } from "@ngrx/store";
import { AuthState, authenticate as authenticateAction } from "../store/auth";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {

    private apiBaseUrl: string = "";
    
    private authState$: Observable<AuthState>;

    constructor(private http: HttpClient, private appsettings: AppSettingsService, private store: Store<{ auth: AuthState }>){
        this.authState$ = store.select('auth');
    }

    authenticate(name: string, password: string): Observable<string>{
        let params = new HttpParams();
        params.set("name", name);
        params.set("password", password);

        return this.http.get<string>(this.getUrl("auth"), {params})
            .pipe(map(token => {
                if (token) {
                    this.store.dispatch(authenticateAction());     
                }

                return token;
            }));
    }

    register(user: User): Observable<number> {

        return this.http.post<number>(this.getUrl("register"), user);
    }

    private getUrl(path: string): string {
        return `${this.apiBaseUrl}/${path}`;
    }
}