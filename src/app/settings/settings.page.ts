import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from './settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    maxNumber: number;
    gameTime: number;
    extraTime: number;

    constructor(private router: Router, private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.maxNumber = this.settingsService.MAX_OPERATOR;
        this.gameTime = this.settingsService.GAME_TIME;
        this.extraTime = this.settingsService.EXTRA_TIME;
    }

    onMaxNumberChange(event) {
        this.maxNumber = event.detail.value;
    }

    onGameTimeChange(event) {
        this.gameTime = event.detail.value;
    }

    onExtraTimeChange(event) {
        this.extraTime = event.detail.value;
    }

    saveSettings() {
        this.settingsService.MAX_OPERATOR = this.maxNumber;
        this.settingsService.GAME_TIME = this.gameTime;
        this.settingsService.EXTRA_TIME = this.extraTime;
        this.router.navigate(['/stats']);
    }

}
