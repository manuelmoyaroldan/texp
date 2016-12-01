﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TraveldocComponent } from './traveldoc.component';
import { TraveldocRoutingModule } from './traveldoc-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , TraveldocRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
    ],
    declarations: [TraveldocComponent]
})
export class TraveldocModule { }