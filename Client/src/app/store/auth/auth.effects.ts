import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {AuthService} from '../../services';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions, 
        private authService: AuthService) {        
    }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.login),
            exhaustMap(action =>
                this.authService.login(action.userName, action.userPassword).pipe(
                    map(loginResult => {
                        if (loginResult.user) {
                            return authActions.loginSuccess({ userName: loginResult.user.login, token: loginResult.token });           
                        } else {
                            return authActions.loginFail({ userName: action.userName, failMessage: loginResult.errorMessage });
                        }                        
                    }),
                    catchError(error => of(authActions.loginFail({ userName: action.userName, failMessage: error.message })))
                )
            )
    ));
}