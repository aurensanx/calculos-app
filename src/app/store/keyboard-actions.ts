import {Formula} from '../pages/home/components/operation/operation';

export const NEW_ANSWER = 'NEW_ANSWER';
export const NEW_FORMULA = 'NEW_FORMULA';


export class NewAnswerAction {
    readonly type = NEW_ANSWER;

    constructor(public payload: number) {
    }
}

export class NewFormulaAction {
    readonly type = NEW_FORMULA;

    constructor(public payload: Formula) {
    }
}

export type KeyboardAction = NewAnswerAction | NewFormulaAction;
