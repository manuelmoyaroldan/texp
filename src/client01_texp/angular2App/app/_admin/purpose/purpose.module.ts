import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PurposeComponent } from './purpose.component';
import { PurposeRoutingModule } from './purpose-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , PurposeRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
    ],
    declarations: [PurposeComponent]
})
export class PurposeModule { }
