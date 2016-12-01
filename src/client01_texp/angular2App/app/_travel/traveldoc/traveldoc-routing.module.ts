import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { TraveldocComponent } from './traveldoc.component';

const routes: Routes = [
    {
        path: '',
        component: TraveldocComponent,
        data: {
            title: 'Travel'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TraveldocRoutingModule { }
