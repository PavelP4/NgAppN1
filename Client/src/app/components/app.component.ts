import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, hideSpinner, showSpinner, selectIsShowSpinner } from '../store/app';
import { loadAppSettings, SettingsState } from '../store/settings';
     
@Component({
    selector: 'main-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {    
    private scr: Subscription = new Subscription();

    private settings$: Observable<SettingsState>;
    private app$: Observable<AppState>;
    public showSpinner$: Observable<boolean>;

    constructor(
        private settingsStore: Store<{ settings: SettingsState }>,
        private appStore: Store<{ app: AppState }>,
        private store: Store){
        
            this.settings$ = this.settingsStore.select('settings');
            this.app$ = this.appStore.select('app');
    } 
    
    ngOnInit(): void {   
        let s = this.settings$.subscribe(state => {
            if (state.isAppSettingsSetUp) {
                this.appStore.dispatch(hideSpinner());
            }
        });
        this.scr.add(s);

        this.showSpinner$ = this.appStore.pipe(select(selectIsShowSpinner));
        
        this.appStore.dispatch(showSpinner());
        this.settingsStore.dispatch(loadAppSettings());
    }

    ngOnDestroy(): void {
        this.scr.unsubscribe();
    }
}