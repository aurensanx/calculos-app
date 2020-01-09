import {Component, OnInit} from '@angular/core';
import {NewFormulaAction} from '../../store/keyboard-actions';
import {Store} from '@ngrx/store';
import {Question} from '../../store/state';
import {Router} from '@angular/router';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.page.html',
    styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

    constructor(private store: Store<{ question: Question }>, private router: Router) {
    }

    ngOnInit() {
    }

    goToNewGame() {
        this.store.dispatch(new NewFormulaAction());
        this.router.navigate(['/home']);
    }

}
