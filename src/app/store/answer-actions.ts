export const NEW_ANSWER = 'NEW_ANSWER';

export class NewAnswerAction {
    readonly type = NEW_ANSWER;

    constructor(public payload: string) {
    }
}

export type AnswerAction = NewAnswerAction;

