import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {OperationService} from '../home/components/operation/operation.service';
import {Formula} from '../home/components/operation/operation';
import {NewFormulaAction} from '../../store/formula-actions';
import {NewAnswerAction} from '../../store/answer-actions';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.page.html',
    styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

    constructor(private answerStore: Store<{ answer: number }>, private formulaStore: Store<{ formula: Formula }>,
                private router: Router, private operationService: OperationService) {
    }

    ngOnInit() {
    }

    goToNewGame() {
        this.formulaStore.dispatch(new NewFormulaAction(this.operationService.getNewFormula()));
        this.answerStore.dispatch(new NewAnswerAction(undefined));
        this.router.navigate(['/home']);
    }

}
