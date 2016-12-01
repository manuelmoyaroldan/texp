import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { TraveldocService } from './traveldoc.service';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule } from 'primeng/primeng';

@Component({
    templateUrl: 'traveldoc.component.html'
    , providers: [TraveldocService
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
    ]
})
export class TraveldocComponent implements OnInit {

    public idrec: Number = 0;
    public myparams: any;

    public list: any[] = [];
    public selected: any = {};
    public current: any = {};

    public menu_items: MenuItem[];
    public show_dialog: boolean = false;

    constructor(private _Service: TraveldocService, private route: ActivatedRoute,private location: Location) { }

    ngOnInit(): void {
        //console.log(this.route.params.);
        //this.route.params
        //    .switchMap((params: Params) => this.myparams=params[0]);
        //    //.switchMap((params: Params) => this.idrec = (params['id']));
        this.route.params.subscribe(params => {
            //get parameter
            try {
                this.idrec = +params['id']; // (+) converts string 'id' to a number
            } catch(e) { this.idrec = 0; }
            
            //asses parameter
            if (this.idrec > 0) {
                //get travel
                this._Service
                    .get(this.idrec)
                    .subscribe(data => this.current = data,
                    error => console.log(error),
                    () => console.log('Get travel completed'));
            } else {
                //create travel
                this.current = { travelId: 0, destination: '', phaseId: 1 };
            }
            // In a real app: dispatch action to load the details here.
        });
        //this._Service
        //    .getAll()
        //    .subscribe(data => this.list = data,
        //    error => console.log(error),
        //    () => console.log('Get all completed.'));

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
        if (this.selected.travelId != undefined) { //update
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
                this.list = this.list.filter(h => h.travelId !== this.selected.travelId);
                this.selected = {};
            });
    }
}
