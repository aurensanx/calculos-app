import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from './settings.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    maxNumber: number;
    gameTime: number;
    extraTime: number;

    constructor(private router: Router, private settingsService: SettingsService, private storage: Storage) {
    }


    ngOnInit() {
        this.storage.get('maxNumber').then((val) => {
            this.maxNumber = val || this.settingsService.MAX_OPERATOR;
        });
        this.storage.get('gameTime').then((val) => {
            this.gameTime = val || this.settingsService.GAME_TIME;
        });
        this.storage.get('extraTime').then((val) => {
            this.extraTime = val || this.settingsService.EXTRA_TIME;
        });
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
        this.storage.set('maxNumber', this.maxNumber);
        this.storage.set('gameTime', this.gameTime);
        this.storage.set('extraTime', this.extraTime);
        this.router.navigate(['/stats']);
    }

}
