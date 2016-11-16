import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompanyComponent } from './company/company.component';
import { CompanyRoutingModule } from './company-routing.module';

import { CurrencyModule } from '../currency/currency.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , CompanyRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , CurrencyModule
    ],
    declarations: [CompanyComponent]
})
export class CompanyModule { }
