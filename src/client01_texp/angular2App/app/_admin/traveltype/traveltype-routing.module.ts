import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { TraveltypeComponent } from './traveltype.component';

const routes: Routes = [
    {
        path: '',
        component: TraveltypeComponent,
        data: {
            title: 'Traveltype'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TraveltypeRoutingModule { }
