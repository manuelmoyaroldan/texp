import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
    {
        path: '',
        component: CurrencyComponent,
        data: {
            title: 'Currency'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurrencyRoutingModule { }
