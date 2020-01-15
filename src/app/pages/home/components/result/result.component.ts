import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
})
export class ResultComponent {

    answer$: Observable<number>;

    constructor(private store: Store<{ answer: number }>) {
        this.answer$ = store.pipe(select('answer'));
    }

}
