import { createReducer, on } from "@ngrx/store";
import { authenticate } from "./auth.actions";
import { AuthState } from "./auth.state";

export const initialAuthState = new AuthState(false);

const _authReducer = createReducer(
    initialAuthState,
    on(authenticate, state => new AuthState(true)));

export function authReducer(state, action) {
    return _authReducer(state, action);
}