export const NEW_ANSWER = 'NEW_ANSWER';

export class NewAnswerAction {
    readonly type = NEW_ANSWER;

    constructor(public payload: number) {
    }
}

export type AnswerAction = NewAnswerAction;

