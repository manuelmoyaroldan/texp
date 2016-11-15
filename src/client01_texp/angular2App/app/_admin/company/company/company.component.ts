import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { CompanyService } from './company.service';

import { DataListModule } from 'primeng/primeng';

@Component({
    templateUrl: 'company.component.html'
    , providers: [CompanyService, DataListModule]
})
export class CompanyComponent implements OnInit {

    public test: string = 'test';
    public companies: any[] = [];

    constructor(private _companyService: CompanyService) { }

    ngOnInit(): void {
        this._companyService
            .getCompanies()
            .subscribe(data => this.companies = data,
            error => console.log(error),
            () => console.log('Get all completed.')); 
    }
}
