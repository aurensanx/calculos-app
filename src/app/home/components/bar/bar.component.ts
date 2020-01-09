import {Component, OnInit} from '@angular/core';
import {Linear, TimelineMax} from 'gsap';
import {GAME_TIME} from '../../../app.settings';
import {select, Store} from '@ngrx/store';
import {Question} from '../../store/state';
import {Formula} from '../operation/operation';
import * as _ from 'lodash';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {

    // animationActive: boolean;
    formula: Formula;

    constructor(private store: Store<{ question: Question }>) {
    }

    ngOnInit() {
        const tlh = new TimelineMax();
        tlh.to('#bgChange', GAME_TIME, {attr: {x: -400}, ease: Linear.easeNone});
        tlh.to('#bgChange', GAME_TIME / 2, {attr: {fill: '#FFFF00'}, ease: Linear.easeNone}, 0);
        tlh.to('#bgChange', GAME_TIME / 2, {attr: {fill: '#FF0000'}, ease: Linear.easeNone}, GAME_TIME / 2);

        tlh.eventCallback('onComplete', this.onTimeCompleted);

        this.store.pipe(select('question')).subscribe(({formula}) => {
            if (!this.formula) {
                this.formula = formula;
            } else if (!_.isEqual(this.formula, formula)) {
                this.formula = formula;
                tlh.time(Math.max(tlh.time() - (GAME_TIME / 5), 0));
            }
        });

    }

    onTimeCompleted() {
        console.log('ha acabado el tiempo!');
    }

}
