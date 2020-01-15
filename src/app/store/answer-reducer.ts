import {AnswerAction, NEW_ANSWER} from './answer-actions';


const _answerReducer =
    (state: number = undefined, action: AnswerAction) => {
        switch (action.type) {
            case NEW_ANSWER:
                return action.payload;
            default:
                return state;
        }
    };


export function answerReducer(state, action) {
    return _answerReducer(state, action);
}






