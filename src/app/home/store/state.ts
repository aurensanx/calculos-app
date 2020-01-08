import {ActionReducerMap} from '@ngrx/store';
import {keyboardReducer} from './keyboard-reducer';
import {Formula} from '../components/operation/operation';

export interface Question {
    answer: number;
    formula: Formula;
}

interface AppState {
    question: Question;
}

export const reducers: ActionReducerMap<AppState> = {
    question: keyboardReducer,
};
