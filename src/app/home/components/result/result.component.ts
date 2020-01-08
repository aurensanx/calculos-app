import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Question} from '../../store/state';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
})
export class ResultComponent {

    // answer$: Observable<Question>;
    answer: number;

    constructor(private store: Store<{ question: Question }>) {
        store.pipe(select('question')).subscribe(({answer}) => {
            this.answer = answer;
        });
    }

}
