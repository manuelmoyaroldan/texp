import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { PhaseComponent } from './phase.component';

const routes: Routes = [
    {
        path: '',
        component: PhaseComponent,
        data: {
            title: 'Phase'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhaseRoutingModule { }
