import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { CapitalizePipe } from './pipes/capitalize.pipe';
//import { TrimPipe } from './pipes/trim.pipe';
//import { SortByDirective } from './directives/sortby.directive';
import { DropdownModule, SelectItem } from 'primeng/primeng';

import { CurrencySelector } from './currency.selector';


@NgModule({
  imports: [FormsModule, CommonModule, DropdownModule],
  declarations: [CurrencySelector],//CapitalizePipe, TrimPipe, SortByDirective],
  exports: [//CapitalizePipe, TrimPipe, SortByDirective,
    CommonModule, FormsModule, HttpModule,CurrencySelector, DropdownModule]
  // providers: [] // these would be multi-instance
})
export class SelectorsModule { }