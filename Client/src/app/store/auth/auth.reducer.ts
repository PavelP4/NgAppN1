import { Action, createReducer, on } from "@ngrx/store";
import * as authActions from "./auth.actions";

export const initialAuthState: AuthState = {
    userName: "",
    token: "",
    isAuthenticated: false,
    errorMessage: ""
};

const _authReducer = createReducer(
    initialAuthState,
    on(authActions.loginSuccess, (state: AuthState, props: authActions.LoginSuccessActionProps) => { 
        return ({...state, 
            userName: props.userName, 
            token: props.token,
            isAuthenticated: !!props.token && !!props.userName,
            errorMessage: ""
        });
    }),
    on(authActions.loginFail, (state: AuthState, props: authActions.LoginFailActionProps) => { 
        return ({...state, 
            userName: props.userName, 
            token: "",
            isAuthenticated: false,
            errorMessage: props.failMessage
        });
    }),
    on(authActions.logout, (state: AuthState) => { 
        return ({...state, 
            userName: "", 
            token: "",
            isAuthenticated: false,
            errorMessage: ""
        });
    }));

export function authReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}



export interface AuthState {
    userName: string;
    token: string;
    isAuthenticated: boolean;
    errorMessage: string;
}