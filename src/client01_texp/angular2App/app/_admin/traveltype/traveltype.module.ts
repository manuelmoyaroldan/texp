import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TraveltypeComponent } from './traveltype.component';
import { TraveltypeRoutingModule } from './traveltype-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , TraveltypeRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
    ],
    declarations: [TraveltypeComponent]
})
export class TraveltypeModule { }
