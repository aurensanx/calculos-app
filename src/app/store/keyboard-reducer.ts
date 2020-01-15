import {KeyboardAction, NEW_ANSWER, NEW_FORMULA,} from './keyboard-actions';
import {Question} from './state';


const _keyboardReducer =
    (state: Question = {answer: undefined, formula: undefined}, action: KeyboardAction) => {
        switch (action.type) {
            case NEW_ANSWER:
                return {formula: state.formula, answer: action.payload};
            case NEW_FORMULA:
                return {formula: action.payload, answer: undefined};
            default:
                return state;
        }
    };


export function keyboardReducer(state, action) {
    return _keyboardReducer(state, action);
}






