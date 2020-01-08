import {Component} from '@angular/core';
import {Formula} from './operation';
import {select, Store} from '@ngrx/store';
import {Question} from '../../store/state';


@Component({
    selector: 'app-operation',
    templateUrl: './operation.component.html',
    styleUrls: ['./operation.component.scss'],
})
export class OperationComponent {

    formula: Formula;

    constructor(private store: Store<{ question: Question }>) {
        store.pipe(select('question')).subscribe(({formula}) => {
            this.formula = formula;
        });
    }

}
