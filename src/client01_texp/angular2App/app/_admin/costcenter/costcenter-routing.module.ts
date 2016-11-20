import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { CostcenterComponent } from './costcenter.component';

const routes: Routes = [
    {
        path: '',
        component: CostcenterComponent,
        data: {
            title: 'Costcenter'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostcenterRoutingModule { }
