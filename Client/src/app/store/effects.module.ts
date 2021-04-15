import { NgModule } from "@angular/core";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';

@NgModule({
    imports: [EffectsModule]
})
export class AppEffectsModule {   

    static forRoot() {
        return EffectsModule.forRoot([AuthEffects]);
    }
}