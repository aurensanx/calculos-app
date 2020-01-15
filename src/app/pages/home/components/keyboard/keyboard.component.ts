import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NewAnswerAction, NewFormulaAction} from '../../../../store/keyboard-actions';
import {Vibration} from '@ionic-native/vibration/ngx';
import {OperationService} from '../operation/operation.service';
import {Question} from '../../../../store/state';
import {Formula} from '../operation/operation';
import {KeyboardService} from './keyboard.service';


@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {

    answer: number;
    formula: Formula;

    constructor(private store: Store<{ question: Question }>, private operationService: OperationService,
                private keyboardService: KeyboardService, private vibration: Vibration) {
        store.pipe(select('question')).subscribe(next => {
            this.formula = next.formula;
            this.answer = next.answer;
        });
    }

    onNumberClick = (a: number) => {
        const answer = this.keyboardService.addNumber(this.answer, a);
        const isCorrect = this.operationService.checkAnswer(this.formula, answer);
        if (isCorrect) {
            this.store.dispatch(new NewFormulaAction(this.operationService.getNewFormula()));
        } else {
            this.store.dispatch(new NewAnswerAction(answer));
        }
        // this.vibration.vibrate(40);
    };

    onDelete = () => {
        const answer = this.keyboardService.deleteNumber(this.answer);
        this.store.dispatch(new NewAnswerAction(answer));
    };

    onPlusMinus = () => {
        const answer = this.keyboardService.changeSign(this.answer);
        const isCorrect = this.operationService.checkAnswer(this.formula, answer);
        if (isCorrect) {
            this.store.dispatch(new NewFormulaAction(this.operationService.getNewFormula()));
        } else {
            this.store.dispatch(new NewAnswerAction(answer));
        }
    };

    onPressBackspace() {
        this.store.dispatch(new NewAnswerAction(undefined));
    }

}
