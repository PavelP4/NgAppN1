import {AppSettingsService} from '../../services';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as appSettingsActions from './settings.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SettignsEffects {

    constructor(
        private actions$: Actions,
        private appSettingsService: AppSettingsService) {        
    }

    appSettings$ = createEffect(() => 
        this.actions$.pipe(
            ofType(appSettingsActions.loadAppSettings),
            exhaustMap(action => 
                this.appSettingsService.getSettings().pipe(
                    map(data => appSettingsActions.loadAppSettingsSuccess({appSettings: data})),
                    catchError(error => of(appSettingsActions.loadAppSettingsFailed({appSettings: null})))
                    )
            )
        )
    );
}