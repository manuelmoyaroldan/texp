import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { CurrencyService } from './currency.service';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule } from 'primeng/primeng';

@Component({
    templateUrl: 'currency.component.html'
    , providers: [CurrencyService, DataListModule, DataTableModule, ContextMenuModule]
})
export class CurrencyComponent implements OnInit {

    public list: any[] = [];
    public selected: any = {};

    public menu_items: MenuItem[];
    public show_dialog: boolean = false;

    constructor(private _Service: CurrencyService) { }

    ngOnInit(): void {
        this._Service
            .getAll()
            .subscribe(data => this.list = data,
            error => console.log(error),
            () => console.log('Get all completed.')); 

        this.menu_items = [
            { label: 'View', icon: 'fa-search', command: (event: any) => this.showDialog() },
            { label: 'Delete', icon: 'fa-close', command: (event: any) => this.delete() }
        ];
    }

    onRowSelect(event: any) {
    }

    onRowUnselect(event: any) {
        //this.selected = new Equipment();
        this.selected = {};
    }
    showDialog() {
        this.show_dialog = true;
    }

    delete() {
        //this.selected.isActive = false;
        this._Service
            .delete(this.selected)
            .then(() => {
                this.list = this.list.filter(h => h.currencyId !== this.selected.currencyId);
                //if (this.selected === this.selected) { this.selected = null; }
            });
    }
}
