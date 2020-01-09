import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    MAX_OPERATOR = 50;
    GAME_TIME = 30;
    EXTRA_TIME = 6;

    constructor() {
    }
}
