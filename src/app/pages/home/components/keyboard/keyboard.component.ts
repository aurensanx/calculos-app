import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Vibration} from '@ionic-native/vibration/ngx';
import {OperationService} from '../operation/operation.service';
import {Formula} from '../operation/operation';
import {KeyboardService} from './keyboard.service';
import {NewFormulaAction, NewAnswerAction} from '@game-store';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnDestroy {

    answer: string;
    formula: Formula;
    subscriptions: Subscription[] = [];

    constructor(private answerStore: Store<{ answer: string }>, private formulaStore: Store<{ formula: Formula }>,
                private operationService: OperationService, private keyboardService: KeyboardService, private vibration: Vibration) {

        this.subscriptions.push(answerStore.pipe(select('answer')).subscribe((next: string) => {
            this.answer = next;
        }));
        this.subscriptions.push(formulaStore.pipe(select('formula')).subscribe((next: Formula) => {
            this.formula = next;
        }));

    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

    onNumberClick = (a: string) => {
        const answer = this.keyboardService.addNumber(this.answer, a);
        const isCorrect = this.operationService.checkAnswer(this.formula, +answer);
        if (isCorrect) {
            this.formulaStore.dispatch(new NewFormulaAction(this.operationService.getNewFormula()));
            this.formulaStore.dispatch(new NewAnswerAction(undefined));
        } else {
            this.answerStore.dispatch(new NewAnswerAction(answer));
        }
        // this.vibration.vibrate(40);
    };

    onDelete = () => {
        if (this.answer) {
            const answer = this.keyboardService.deleteNumber(this.answer);
            this.answerStore.dispatch(new NewAnswerAction(answer));
        }
    };

    onPressBackspace() {
        this.answerStore.dispatch(new NewAnswerAction(undefined));
    }

}
