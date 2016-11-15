import { NgModule } from '@angular/core';

import { CompanyComponent } from './company/company.component';
import { CompanyRoutingModule } from './company-routing.module';

import { DataListModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CompanyRoutingModule
        , DataListModule
    ],
    declarations: [CompanyComponent]
})
export class CompanyModule { }
