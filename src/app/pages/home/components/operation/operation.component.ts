import {Component, OnDestroy} from '@angular/core';
import {Formula} from './operation';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-operation',
    templateUrl: './operation.component.html',
    styleUrls: ['./operation.component.scss'],
})
export class OperationComponent implements OnDestroy {

    formula: Formula;
    subscription: Subscription;

    constructor(private store: Store<{ formula: Formula }>) {
        this.subscription = store.pipe(select('formula')).subscribe((next: Formula) => {
            this.formula = next;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
