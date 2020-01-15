import {Formula} from '../pages/home/components/operation/operation';
import {FormulaAction, NEW_FORMULA} from './formula-actions';


const _formulaReducer =
    (state: Formula = undefined, action: FormulaAction) => {
        switch (action.type) {
            case NEW_FORMULA:
                return action.payload;
            default:
                return state;
        }
    };


export function formulaReducer(state, action) {
    return _formulaReducer(state, action);
}






