import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { CurrencyService } from './currency.service';

import { DropdownModule, SelectItem } from 'primeng/primeng';

@Component({
    selector: 'currencyselector'
    , templateUrl: 'currency.selector.html'
    , providers: [CurrencyService]
})
export class CurrencySelector implements OnInit {
    //@Input() selected: any;

    public list: any[] = [];
    public listitem: SelectItem[] = [];
    public selecteditem: any = {};

    constructor(private _Service: CurrencyService) {

    }

    ngOnInit(): void {
        this._Service
            .getAll()
            .subscribe(data => this.list = data,
            error => console.log(error),
            () => this.loadSelectItem());

    }

    private loadSelectItem() {
        this.listitem = [];
        this.listitem.push({ label: '(Select Item)', value: {} })
        for (let item of this.list) {
            this.listitem.push({ label: item.name, value: item });
        }
    }
}