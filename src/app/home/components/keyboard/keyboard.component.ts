import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {
    PressBackspaceAction,
    TapBackspaceAction,
    TapNumberAction,
    TapPlusMinusAction
} from '../../store/keyboard-actions';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {

    constructor(private store: Store<{ result: number }>) {
    }

    onNumberClick = (a: number) => {
        this.store.dispatch(new TapNumberAction(a));
    };

    onDelete = () => {
        this.store.dispatch(new TapBackspaceAction());
    };

    onPlusMinus = () => {
        this.store.dispatch(new TapPlusMinusAction());
    };

    onPressBackspace() {
        this.store.dispatch(new PressBackspaceAction());
    }

}
