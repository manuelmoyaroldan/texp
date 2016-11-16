import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyComponent } from './currency/currency.component';
import { CurrencySelector } from './currency/currency.selector';
import { CurrencyRoutingModule } from './currency-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, SelectItem } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , CurrencyRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
    ],
    declarations: [CurrencyComponent, CurrencySelector]
})
export class CurrencyModule { }
