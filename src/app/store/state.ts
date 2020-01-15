import {ActionReducerMap} from '@ngrx/store';
import {answerReducer} from './answer-reducer';
import {Formula} from '../pages/home/components/operation/operation';
import {formulaReducer} from './formula-reducer';


interface AppState {
    answer: number;
    formula: Formula;
}

export const reducers: ActionReducerMap<AppState> = {
    answer: answerReducer,
    formula: formulaReducer,
};
