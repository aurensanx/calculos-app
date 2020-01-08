import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    clickedNumber: { value: number };
    deleted: { value: boolean };

    constructor() {
    }

    onNumberClicked = (a: number) => {
        this.clickedNumber = {value: a};
    };

    onDeleted = () => {
        this.deleted = {value: true};
    }

    onCheckResult = () => {

    }

}
