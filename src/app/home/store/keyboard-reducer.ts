import {
    KeyboardAction,
    NEW_FORMULA,
    PRESS_BACKSPACE,
    TAP_BACKSPACE,
    TAP_NUMBER,
    TAP_PLUS_MINUS
} from './keyboard-actions';
import {Formula, getNewFormula} from '../components/operation/operation';
import {Question} from './state';


const _keyboardReducer =
    (state: Question = {answer: undefined, formula: getNewFormula()}, action: KeyboardAction) => {
        switch (action.type) {
            case TAP_NUMBER:
                return onTapNumber(state, action);
            case TAP_BACKSPACE:
                return {formula: state.formula, answer: deleteNumber(state.answer)};
            case PRESS_BACKSPACE:
                return {formula: state.formula, answer: undefined};
            case TAP_PLUS_MINUS:
                return onTapPlusMinus(state);
            case NEW_FORMULA:
                return {formula: getNewFormula(), answer: undefined};
            default:
                return state;
        }
    };


export function keyboardReducer(state, action) {
    return _keyboardReducer(state, action);
}

const onTapNumber = (state, action) => {
    const newAnswer = addNumber(state.answer, action.payload);
    return checkAnswer(state.formula, newAnswer);
};

const onTapPlusMinus = (state) => {
    const newAnswer = changeSign(state.answer);
    return checkAnswer(state.formula, newAnswer);
};

const addNumber = (answer: number, payload: number) => +('' + (answer || 0) + payload);
const deleteNumber = (answer: number) => (+('' + answer).slice(0, -1)) || undefined;
const changeSign = (answer: number) => (-1 * answer) || undefined;

const checkAnswer = (formula: Formula, answer: number) => answer === formula.result ? {
    formula: getNewFormula(),
    answer: undefined
} : {formula, answer};



