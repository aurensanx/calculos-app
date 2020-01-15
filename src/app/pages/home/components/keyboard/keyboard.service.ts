import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class KeyboardService {

    constructor() {
    }

    addNumber = (answer: number, payload: number) => +('' + (answer || 0) + payload);
    deleteNumber = (answer: number) => (+('' + answer).slice(0, -1)) || undefined;
    changeSign = (answer: number) => (-1 * answer) || undefined;


}
