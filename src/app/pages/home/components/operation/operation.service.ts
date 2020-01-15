import {Injectable} from '@angular/core';
import {Formula, newOperation, newRandomNumber} from './operation';
import {SettingsService} from '../../../settings/settings.service';

@Injectable({
    providedIn: 'root'
})
export class OperationService {

    constructor(private settingsService: SettingsService) {
    }

    getNewFormula: () => Formula = () => {
        const a = newRandomNumber(this.settingsService.gameSettings.maxNumber);
        const b = newRandomNumber(this.settingsService.gameSettings.maxNumber);
        const operation = newOperation();
        return {a, b, operation, result: operation.operation(a, b)};
    };

    checkAnswer = (formula: Formula, answer: number) => answer === formula.result;

}
