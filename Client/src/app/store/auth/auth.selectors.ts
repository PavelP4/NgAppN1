import { createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";


const _authStateSelector = (state: {auth: AuthState}) => state.auth;
export const isAuthenticatedSelector = createSelector(_authStateSelector, (state: AuthState) => state.isAuthenticated);