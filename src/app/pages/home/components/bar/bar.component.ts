import {Component, OnInit} from '@angular/core';
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
export class BarComponent implements OnInit {

    formula: Formula;
    subscription: Subscription;

    constructor(private store: Store<{ formula: Formula }>, private router: Router, private settingsService: SettingsService) {
    }

    ngOnInit() {
        const tlh = new TimelineMax();
        tlh.to('#bgChange', this.settingsService.gameSettings.gameTime, {attr: {x: -400}, ease: Linear.easeNone});
        tlh.to('#bgChange', this.settingsService.gameSettings.gameTime / 2, {
            attr: {fill: '#FFFF00'},
            ease: Linear.easeNone
        }, 0);
        tlh.to('#bgChange', this.settingsService.gameSettings.gameTime / 2, {
            attr: {fill: '#FF0000'},
            ease: Linear.easeNone
        }, this.settingsService.gameSettings.gameTime / 2);

        tlh.eventCallback('onComplete', () => this.onTimeCompleted(this.router));

        this.subscription = this.store.pipe(select('formula')).subscribe((next) => {
            if (!this.formula) {
                this.formula = next;
                tlh.restart();
            } else {
                this.formula = next;
                tlh.time(Math.max(tlh.time() - this.settingsService.gameSettings.extraTime, 0));
            }
        });
    }


    onTimeCompleted(router: Router) {
        delete this.formula;
        this.subscription.unsubscribe();
        router.navigate(['/stats']);
    }

}
