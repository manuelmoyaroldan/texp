import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { CapitalizePipe } from './pipes/capitalize.pipe';
//import { TrimPipe } from './pipes/trim.pipe';
//import { SortByDirective } from './directives/sortby.directive'  ;
import { DropdownModule, SelectItem } from 'primeng/primeng';

import { CurrencySelector } from './currency.selector';
import { CompanySelector } from './company.selector';
import { CostcenterSelector } from './costcenter.selector';
import { PhaseSelector } from './phase.selector';
import { RoleSelector } from './role.selector';
import { PurposeSelector } from './purpose.selector';
import { TraveltypeSelector } from './traveltype.selector';
 

@NgModule({
    imports: [FormsModule, CommonModule, DropdownModule],
    declarations: [CurrencySelector, CompanySelector, CostcenterSelector, PhaseSelector, RoleSelector, PurposeSelector, TraveltypeSelector],//CapitalizePipe, TrimPipe, SortByDirective],
    exports: [//CapitalizePipe, TrimPipe, SortByDirective,
        CommonModule, FormsModule, HttpModule, CurrencySelector, CompanySelector, CostcenterSelector, PhaseSelector, RoleSelector, PurposeSelector, TraveltypeSelector,   DropdownModule]
  // providers: [] // these would be multi-instance
})
export class SelectorsModule { }