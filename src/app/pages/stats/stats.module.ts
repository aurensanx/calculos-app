import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {StatsPage} from './stats.page';
import {RouterModule} from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: StatsPage
            }
        ])
    ],
    declarations: [StatsPage]
})
export class StatsPageModule {
}
