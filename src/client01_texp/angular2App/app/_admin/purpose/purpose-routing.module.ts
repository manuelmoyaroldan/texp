import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { PurposeComponent } from './purpose.component';

const routes: Routes = [
    {
        path: '',
        component: PurposeComponent,
        data: {
            title: 'Purpose'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurposeRoutingModule { }
