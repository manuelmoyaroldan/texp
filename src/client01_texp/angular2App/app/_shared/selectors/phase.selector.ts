import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { PhaseService } from '../../_admin/phase/phase.service';

import { DropdownModule, SelectItem } from 'primeng/primeng'; 

@Component({
    selector: 'phaseselector'
    , templateUrl: 'phase.selector.html'
    , providers: [PhaseService, DropdownModule]
})
export class PhaseSelector implements OnInit {
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

    constructor(private _Service: PhaseService) {

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