import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TravelphaseComponent } from './travelphase.component';
import { TravelphaseRoutingModule } from './travelphase-routing.module';

import { SelectorsModule } from '../../_shared/selectors/selectors.module';
//import { CurrencySelector} from '../currency/currency/currency.selector';
//import { CurrencyModule } from '../currency/currency.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , TravelphaseRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , SelectorsModule
    ],
    declarations: [TravelphaseComponent]
})
export class TravelphaseModule { }
