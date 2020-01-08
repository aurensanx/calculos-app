export const TAP_NUMBER = 'TAP_NUMBER';
export const TAP_BACKSPACE = 'TAP_BACKSPACE';
export const TAP_PLUS_MINUS = 'TAP_PLUS_MINUS';


export class TapNumberAction {
    readonly type = TAP_NUMBER;

    constructor(public payload: number) {
    }
}

export class TapBackspaceAction {
    readonly type = TAP_BACKSPACE;

    constructor() {
    }
}

export class TapPlusMinusAction {
    readonly type = TAP_PLUS_MINUS;

    constructor() {
    }
}

export type KeyboardAction = TapNumberAction | TapBackspaceAction | TapPlusMinusAction;
