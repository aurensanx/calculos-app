import {Component, OnInit} from '@angular/core';
import {Linear, TimelineMax} from 'gsap';
import {select, Store} from '@ngrx/store';
import {Question} from '../../../../store/state';
import {Formula} from '../operation/operation';
import * as _ from 'lodash';
import {Router} from '@angular/router';

// FIXME
const GAME_TIME = 30;
const ADDITIONAL_TIME = 6;

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {

    formula: Formula;

    constructor(private store: Store<{ question: Question }>, private router: Router) {
    }

    ngOnInit() {
        const tlh = new TimelineMax();
        tlh.to('#bgChange', GAME_TIME, {attr: {x: -400}, ease: Linear.easeNone});
        tlh.to('#bgChange', GAME_TIME / 2, {attr: {fill: '#FFFF00'}, ease: Linear.easeNone}, 0);
        tlh.to('#bgChange', GAME_TIME / 2, {attr: {fill: '#FF0000'}, ease: Linear.easeNone}, GAME_TIME / 2);

        tlh.eventCallback('onComplete', () => this.onTimeCompleted(this.router));

        this.store.pipe(select('question')).subscribe(({formula}) => {
            if (!this.formula) {
                this.formula = formula;
                tlh.restart();
            } else if (!_.isEqual(this.formula, formula)) {
                this.formula = formula;
                tlh.time(Math.max(tlh.time() - ADDITIONAL_TIME, 0));
            }
        });
    }


    onTimeCompleted(router: Router) {
        delete this.formula;
        router.navigate(['/stats']);
    }

}
