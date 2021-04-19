import { Injectable, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Injectable()
export class RouterExtService implements OnDestroy {

    private previousUrl: string = undefined;
    private currentUrl: string = undefined;

    private reSubscription: Subscription = null;

    constructor(private router : Router) {
        this.reSubscription = this.router.events
            .pipe(
                filter((e: any) => e instanceof RoutesRecognized),
                pairwise()
            ).subscribe((e: RoutesRecognized[]) => {
                this.previousUrl = e[0].urlAfterRedirects;
                this.currentUrl = e[1].urlAfterRedirects;
            });
    }

    ngOnDestroy(): void {
        if (this.reSubscription){
            this.reSubscription.unsubscribe();  
            this.reSubscription = null;
        } 
    }

    public getPreviousUrl(){
        return this.previousUrl;
    }   
    
    public getCurrentUrl(){
        return this.currentUrl;
    } 
}