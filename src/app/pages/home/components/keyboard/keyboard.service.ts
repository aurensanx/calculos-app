import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class KeyboardService {

    constructor() {
    }

    // addNumber = (answer: number, payload: string) => +('' + (answer || 0) + payload);
    addNumber = (answer: string, payload: string) => (answer || '') + payload;
    deleteNumber = (answer: string) => answer.slice(0, -1);
    // changeSign = (answer: number) => -1 * (answer || 0);


}
