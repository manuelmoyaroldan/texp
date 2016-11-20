import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { TravelphaseComponent } from './travelphase.component';

const routes: Routes = [
    {
        path: '',
        component: TravelphaseComponent,
        data: {
            title: 'Travelphase'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelphaseRoutingModule { }
