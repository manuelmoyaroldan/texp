import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

import { SelectorsModule } from '../../_shared/selectors/selectors.module';
//import { CurrencySelector} from '../currency/currency/currency.selector';
//import { CurrencyModule } from '../currency/currency.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , UserRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , SelectorsModule
    ],
    declarations: [UserComponent]
})
export class UserModule { }
