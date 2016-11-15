import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyComponent } from './currency/currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , CurrencyRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
    ],
    declarations: [CurrencyComponent]
})
export class CurrencyModule { }
