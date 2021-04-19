import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import { AppSettingsService } from "./appsettings.service";
import { User } from '../models/auth/user';
import { Store } from "@ngrx/store";
import { AuthState, login as loginAction } from "../store/auth";
import { SettingsState } from "../store/settings";
import { LoginResult } from "../models/auth/loginResult";
import { AppSettings } from "../models/settings";

@Injectable()
export class AuthService implements OnDestroy {
    private scr: Subscription = new Subscription();
    private appSettings: AppSettings = null;
    

    constructor(
        private http: HttpClient, 
        private appsettings: AppSettingsService, 
        private store: Store<{ auth: AuthState, settings: SettingsState }>){      
            
        const settings$ = this.store.select('settings');
        let s = settings$.subscribe(state => {        
            if (state.isAppSettingsSetUp) {
                this.appSettings = state.appSettings;
            }
        });
        this.scr.add(s);
    }

    ngOnDestroy(): void {
        this.scr.unsubscribe();
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

        return this.http.get<LoginResult>(this.getUrl("login"), {params});
    }

    register(user: User): Observable<number> {
        return this.http.post<number>(this.getUrl("register"), user);
    }

    private getUrl(path: string): string {
        return `${this.appSettings.serverUrl}/auth/${path}`;
    }
}