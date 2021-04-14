import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettingsService } from "./appsettings.service";
import { User } from '../models/auth/user';

@Injectable()
export class AuthService {

    private apiBaseUrl: string = "";

    constructor(private http: HttpClient, private appsettings: AppSettingsService){
    }

    authenticate(name: string, password: string): Observable<string>{
        let params = new HttpParams();
        params.set("name", name);
        params.set("password", password);

        return this.http.get<string>(this.getUrl("auth"), {params});
    }

    register(user: User): Observable<number> {

        return this.http.post<number>(this.getUrl("register"), user);
    }

    private getUrl(path: string): string {
        return `${this.apiBaseUrl}/${path}`;
    }
}