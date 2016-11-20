﻿import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { RoleComponent } from './role.component';

const routes: Routes = [
    {
        path: '',
        component: RoleComponent,
        data: {
            title: 'Role'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoleRoutingModule { }
