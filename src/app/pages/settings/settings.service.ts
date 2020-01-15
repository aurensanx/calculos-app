import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface GameSettings {
    maxNumber: number;
    gameTime: number;
    extraTime: number;
}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    gameSettings: GameSettings = {
        maxNumber: 50,
        gameTime: 30,
        extraTime: 6,
    };

    constructor(private storage: Storage) {
        this.getStorageSettings();
    }

    getStorageSettings() {
        this.storage.get('maxNumber').then((val) => {
            if (val) {
                this.gameSettings.maxNumber = val;
            }
        });
        this.storage.get('gameTime').then((val) => {
            if (val) {
                this.gameSettings.gameTime = val;
            }
        });
        this.storage.get('extraTime').then((val) => {
            if (val) {
                this.gameSettings.extraTime = val;
            }
        });
    }

    saveStorageSettings(gameSettings: GameSettings) {
        this.storage.set('maxNumber', gameSettings.maxNumber);
        this.storage.set('gameTime', gameSettings.gameTime);
        this.storage.set('extraTime', gameSettings.extraTime);
    }
}
