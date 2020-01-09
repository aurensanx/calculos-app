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
        const a = newRandomNumber(this.settingsService.MAX_OPERATOR);
        const b = newRandomNumber(this.settingsService.MAX_OPERATOR);
        const operation = newOperation();
        return {a, b, operation, result: operation.operation(a, b)};
    };

}
