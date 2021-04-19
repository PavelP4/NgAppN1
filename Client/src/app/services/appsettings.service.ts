import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppSettings } from '../models/settings';

const SETTINGS_LOCATION = "assets/appsettings.json";

@Injectable()
export class AppSettingsService {

    constructor(private http: HttpClient) {
    }
    
    getSettings(): Observable<AppSettings> {       
        return this.http.get(SETTINGS_LOCATION)
            .pipe(map(data => <AppSettings>(data)));
    }
}