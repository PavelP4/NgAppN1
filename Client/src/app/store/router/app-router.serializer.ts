import { Params, RouterStateSnapshot, Data } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface AppRouterStateUrl {
    url: string
    params: Params
    queryParams: Params
    data: Data
}

export class AppRouterSerializer implements RouterStateSerializer<AppRouterStateUrl> {
    serialize(state: RouterStateSnapshot): AppRouterStateUrl {
        let currentRoute = state.root;

        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
        }

        const {
            url,
            root: { queryParams },
        } = state;
        const { params, data } = currentRoute;

        return { url, params, queryParams, data };
    }
}