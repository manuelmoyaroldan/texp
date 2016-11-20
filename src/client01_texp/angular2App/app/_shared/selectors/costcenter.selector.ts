import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { CostcenterService } from '../../_admin/costcenter/costcenter.service';

import { DropdownModule, SelectItem } from 'primeng/primeng'; 

@Component({
    selector: 'costcenterselector'
    , templateUrl: 'costcenter.selector.html'
    , providers: [CostcenterService, DropdownModule]
})
export class CostcenterSelector implements OnInit {
    private currentSelectedItem: any;
    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() set selectedItem(machineItem: any) {
        this.currentSelectedItem = machineItem;
        this.selectedItemChange.emit(machineItem);
    }

    get selectedItem(): any {
        return this.currentSelectedItem;
    }

    public list: any[] = [];
    public listitem: SelectItem[] = [];

    constructor(private _Service: CostcenterService) {

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