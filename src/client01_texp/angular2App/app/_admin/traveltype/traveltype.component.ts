import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { TraveltypeService } from './traveltype.service';



import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule } from 'primeng/primeng';

@Component({
    templateUrl: 'traveltype.component.html'
    , providers: [TraveltypeService
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
    ]
})
export class TraveltypeComponent implements OnInit {

    public list: any[] = [];
    public selected: any = {};
    public current: any = {};

    public menu_items: MenuItem[];
    public show_dialog: boolean = false;

    constructor(private _Service: TraveltypeService) { }

    ngOnInit(): void {
        this._Service
            .getAll()
            .subscribe(data => this.list = data,
            error => console.log(error),
            () => console.log('Get all completed.'));

        this.menu_items = [
            { label: 'Edit', icon: 'fa-edit', command: (event: any) => this.click_Edit() },
            { label: 'Activate', icon: 'fa-check-circle-o', command: (event: any) => this.activate() },
            { label: 'DeActivate', icon: 'fa-circle-o', command: (event: any) => this.deactivate() },
            { label: 'Delete', icon: 'fa-close', command: (event: any) => this.delete() }
        ];
    }

    onRowSelect(event: any) {
    }

    onRowUnselect(event: any) {
        this.selected = {};
    }

    click_Edit() {
        //this.current = Object.assign({}, this.selected);
        this.current = JSON.parse(JSON.stringify(this.selected));

        this.show_dialog = true;
    }

    click_Add(event: any) {
        this.selected = {};
        this.current = {};
        this.show_dialog = true;
    }

    onCancel(event: any) {
        this.show_dialog = false;
    }

    onSubmit() {
        if (this.selected.traveltypeId != undefined) { //update
            this._Service.update(this.current)
                .subscribe(data => { this.show_dialog = false; this.selected = Object.assign({}, this.current); });

        } else { //create
            this._Service.create(this.current)
                .subscribe(data => { this.list.push(data); this.show_dialog = false; this.selected = data; });
        }
    }

    deactivate() {
        this._Service.deactivate(this.selected)
            .subscribe((status: any) => {
                if (status) {
                    console.log("updated");
                    this.selected.isActive = false;
                }
                else {
                    console.log("update error");
                }
            });
    }
    activate() {
        this._Service.activate(this.selected)
            .subscribe((status: any) => {
                if (status) {
                    console.log("updated");
                    this.selected.isActive = true;
                }
                else {
                    console.log("update error");
                }
            });
    }

    delete() {
        this._Service
            .delete(this.selected)
            .then(() => {
                this.list = this.list.filter(h => h.traveltypeId !== this.selected.traveltypeId);
                this.selected = {};
            });
    }
}
