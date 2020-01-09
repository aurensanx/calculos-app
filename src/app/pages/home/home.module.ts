import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {OperationComponent} from './components/operation/operation.component';
import {ResultComponent} from './components/result/result.component';
import {KeyboardComponent} from './components/keyboard/keyboard.component';
import {BarComponent} from './components/bar/bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage, OperationComponent, ResultComponent, BarComponent, KeyboardComponent]
})
export class HomePageModule {
}
