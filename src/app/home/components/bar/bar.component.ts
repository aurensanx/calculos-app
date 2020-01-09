import {Component, OnInit} from '@angular/core';
import {Linear, TimelineMax} from 'gsap';
import {GAME_TIME} from '../../../app.settings';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {

    // animationActive: boolean;

    constructor() {

    }

    ngOnInit() {
        const tlh = new TimelineMax();
        tlh.to('#bgChange', GAME_TIME, {attr: {x: -400}, ease: Linear.easeNone});
        tlh.to('#bgChange', GAME_TIME / 2, {attr: {fill: '#FFFF00'}, ease: Linear.easeNone}, 0);
        tlh.to('#bgChange', GAME_TIME / 2, {attr: {fill: '#FF0000'}, ease: Linear.easeNone}, GAME_TIME / 2);
        // tlh.to('#bgChange', 5, {attr: {fill: '#00FF00'}, ease: Linear.easeNone});
    }

}
