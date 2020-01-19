import {Component, OnDestroy, OnInit} from '@angular/core';
import {Linear, TimelineMax} from 'gsap';
import {select, Store} from '@ngrx/store';
import {Formula} from '../operation/operation';
import {Router} from '@angular/router';
import {SettingsService} from '../../../settings/settings.service';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit, OnDestroy {

    formula: Formula;
    subscription: Subscription;
    tlh: TimelineMax;

    constructor(private store: Store<{ formula: Formula }>, private router: Router, private settingsService: SettingsService) {
    }

    ngOnInit() {

        this.subscription = this.store.pipe(select('formula')).subscribe((next) => {
            if (!this.formula) {
                this.formula = next;
                this.tlh = new TimelineMax();
                this.tlh.to('#bgChange', this.settingsService.gameSettings.gameTime, {
                    attr: {x: -400},
                    ease: Linear.easeNone
                });
                this.tlh.to('#bgChange', this.settingsService.gameSettings.gameTime / 2, {
                    attr: {fill: '#FFFF00'},
                    ease: Linear.easeNone
                }, 0);
                this.tlh.to('#bgChange', this.settingsService.gameSettings.gameTime / 2, {
                    attr: {fill: '#FF0000'},
                    ease: Linear.easeNone
                }, this.settingsService.gameSettings.gameTime / 2);

                this.tlh.eventCallback('onComplete', () => this.onTimeCompleted(this.router));
                // tlh.restart();
            } else {
                this.formula = next;
                this.tlh.time(Math.max(this.tlh.time() - this.settingsService.gameSettings.extraTime, 0));
            }
        });
    }

    ngOnDestroy(): void {
        this.resetBar();
    }


    onTimeCompleted(router: Router) {
        router.navigate(['/stats']);
    }

    resetBar() {
        delete this.formula;
        this.subscription.unsubscribe();
        this.tlh.kill();
    }

}
