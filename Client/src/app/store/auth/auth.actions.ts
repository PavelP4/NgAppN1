import { createAction, props } from "@ngrx/store";

export const login = createAction("[Auth Page] Login ", props<LoginActionProps>());
export const loginSuccess = createAction("[Auth Service] Login success", props<LoginSuccessActionProps>());
export const loginFail = createAction("[Auth Service] Login fail", props<LoginFailActionProps>());
export const logout = createAction("[Auth Page] Logout");

export interface LoginActionProps {
    userName: string; 
    userPassword: string;
}

export interface LoginSuccessActionProps {
    userName: string; 
    token: string;
}

export interface LoginFailActionProps {
    userName: string; 
    failMessage: string;
}