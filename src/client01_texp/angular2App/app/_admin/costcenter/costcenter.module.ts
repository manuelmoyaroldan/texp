import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CostcenterComponent } from './costcenter.component';
import { CostcenterRoutingModule } from './costcenter-routing.module';

import { SelectorsModule } from '../../_shared/selectors/selectors.module';
//import { CurrencySelector} from '../currency/currency/currency.selector';
//import { CurrencyModule } from '../currency/currency.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , CostcenterRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , SelectorsModule
    ],
    declarations: [CostcenterComponent]
})
export class CostcenterModule { }
