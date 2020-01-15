import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameSettings, SettingsService} from './settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    gameSettings: GameSettings;

    constructor(private router: Router, private settingsService: SettingsService) {
        this.gameSettings = this.settingsService.gameSettings;
    }

    ngOnInit() {
    }

    onMaxNumberChange(event) {
        this.gameSettings.maxNumber = event.detail.value;
    }

    onGameTimeChange(event) {
        this.gameSettings.gameTime = event.detail.value;
    }

    onExtraTimeChange(event) {
        this.gameSettings.extraTime = event.detail.value;
    }

    saveSettings() {
        this.settingsService.saveStorageSettings(this.gameSettings);
        this.router.navigate(['/stats']);
    }

}
