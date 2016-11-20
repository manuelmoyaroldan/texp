import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { RoleService } from '../../_admin/role/role.service';

import { DropdownModule, SelectItem } from 'primeng/primeng'; 

@Component({
    selector: 'roleselector'
    , templateUrl: 'role.selector.html'
    , providers: [RoleService, DropdownModule]
})
export class RoleSelector implements OnInit {
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

    constructor(private _Service: RoleService) {

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