import { Observable } from 'rxjs/Observable';
import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
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
    //, animations: [trigger('myAnimation', [transition(':enter', [style({ transform: 'translateX(100%), opacity: 0' }),animate('500ms', style({ transform: 'translateX(0), opacity: 1' }))])]]
    //, animations: [
    //    trigger('flyInOut', [
    //        state('center', style({ transform: 'translateX(0)' })),
    //        state('left', style({ transform: 'translateX(-100%)' })),
    //        state('right', style({ transform: 'translateX(100%)' })),
    //        transition('* => left, * => right, left => center, right => center, * =>center',
    //            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))

    //        //transition(':enter', [
    //        //    style({ transform: 'translateX(100%)' }),
    //        //    animate(500)
    //        //]),
    //        //transition(':leave', [
    //        //    animate(500, style({ transform: 'translateX(-100%)' }))
    //        //])
    //    ])
    //]    
    , animations: [
        trigger('flyInOut', [
            //state('center', style({ transform: 'translateX(0)' })),
            //state('left', style({ transform: 'translateX(-100%)' })),
            //state('right', style({ transform: 'translateX(100%)' })),
            //transition('* => left, * => right, left => center, right => center, * =>center',
            //    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
            transition('void=>right', [
                style({ transform: 'translateX(-100%)' }),
                animate(500)
            ]),
            //transition('right=>void', [
            //    animate(0, style({ transform: 'translateX(-100%)' }))
            //]),
            transition('void=>left', [
                style({ transform: 'translateX(+100%)' }),
                animate(500)
            ]),
            //transition('left=>void', [
            //    animate(0, style({ transform: 'translateX(100%)' }))
            //])

        ])
    ]    
    //,animations: [
    //    trigger('flyInOut', [
    //        state('left', style({ transform: 'translate3d(-100%, 0, 0)' })),
    //        state('left-origin-center', style({ transform: 'translate3d(0, 0, 0)' })),
    //        state('right-origin-center', style({ transform: 'translate3d(0, 0, 0)' })),
    //        state('center', style({ transform: 'translate3d(0, 0, 0)' })),
    //        state('right', style({ transform: 'translate3d(100%, 0, 0)' })),
    //        transition('* => left, * => right, left => center, right => center',
    //            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
    //        transition('void => left-origin-center', [
    //            style({ transform: 'translate3d(-100%, 0, 0)' }),
    //            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
    //        ]),
    //        transition('void => right-origin-center', [
    //            style({ transform: 'translate3d(100%, 0, 0)' }),
    //            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
    //        ])
    //    ])
    //]
})
export class TraveldocComponent implements OnInit {

    public idrec: Number = 0;
    public myparams: any;

    public doc_state: any = 1;
    public doc_state_prev: any = 1;
    public show_toolbar: any = 1;
    public prev_state: any = 0;
    public next_state: any = 2;

    public selected: any = {};
    public current: any = {};

    public selecteddetail: any = {};
    public currentdetail: any = {};


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
                this.current = { travelId: 0, destination: '', phaseId: 1, traveldetail: [], advancedetail: [] };
            }
            // In a real app: dispatch action to load the details here.
        });

    }

    change_state(value: any) {
        //1-properties
        //2-ta question, 3- ta list, 4- ta edition
        //5-hotel question, 6- hotel edition
        //7-advance question, 8- advance list, 9- advance edition
        //10-authorizacion request
        this.doc_state_prev = this.doc_state;
        let temp_state = value;
        //console.log(this.current.traveldetail.length);
        if (temp_state == 1) {
            this.doc_state = temp_state; console.log("properties");
            this.prev_state = 0;
            this.next_state = 3;
        } if (temp_state == 2 && (this.current.traveldetail == undefined || this.current.traveldetail.length == 0)) { //2 ta question
            this.doc_state = temp_state; console.log("ta question");
            this.prev_state = 1;
            this.next_state = 0;
        } if (temp_state == 2 && this.current.traveldetail != undefined && this.current.traveldetail.length > 0) { //3 ta list
            this.doc_state = 3; this.doc_state = temp_state; console.log("ta list");
            this.prev_state = 1;
            this.next_state = 8;
        } if (temp_state == 3 && (this.current.traveldetail == undefined || this.current.traveldetail.length == 0 )) { //3 ta list
            this.doc_state = 2; console.log("ta question");
            this.prev_state = 1;
            this.next_state = 0;
        } if (temp_state == 3 && this.current.traveldetail != undefined && this.current.traveldetail.length > 0) { //3 ta list
            this.doc_state = 3; console.log("ta list");
            this.prev_state = 1;
            this.next_state = 8;
        } if (temp_state == 4) { //4 ta edition
            this.doc_state = temp_state;
            this.prev_state = 0;
            this.next_state = 0; //this.currentdetail = { };
        } if (temp_state == 5 && (this.current.traveldetail == undefined || this.current.traveldetail.length <= 0)) { //5 hotel question
            this.doc_state = 5;
            this.prev_state = 0;
            this.next_state = 0;
        } if (temp_state == 6) { //6 hotel edition
            this.doc_state = temp_state;
            this.prev_state = 0;
            this.next_state = 0;
        } if (temp_state == 7 && (this.current.advancedetail == undefined || this.current.advancedetail.length <= 0)) { //7 advance question
            this.doc_state = temp_state;
            this.prev_state = 3;
            this.next_state = 0;
        } if (temp_state == 8 && this.current.advancedetail != undefined && this.current.advancedetail.length > 0) { //8 advance list with data
            this.doc_state = 7;
            this.prev_state = 3;
            this.next_state = 10;
        } if (temp_state == 8 && (this.current.advancedetail == undefined || this.current.advancedetail.length<= 0)) { //8 advance list wo data
            this.doc_state = 7;
            this.prev_state = 3;
            this.next_state = 0;
        } if (temp_state == 9) { //9 advance edition
            this.doc_state = temp_state;
            this.prev_state = 0;
            this.next_state = 0;
        } if (temp_state == 10) { //10 request auth
            this.doc_state = temp_state;
            this.prev_state = 8;
            this.next_state = 0;
        }
    }

    getState() {

        if (this.doc_state > this.doc_state_prev) {
            return 'right';
        //} else if (this.doc_state > value) {
        //    return 'right';
        } else {
            return 'left';
        }

    }
    
    save_traveldetail(event: any) {

        if (this.currentdetail.traveldetailId == 0 || this.currentdetail.traveldetailId==null) { //new
            if (this.current.traveldetail == undefined || this.current.traveldetail == null) {
                this.current.traveldetail = [];
            }
            this.currentdetail.traveldetailId = -1;
            this.current.traveldetail.push(this.currentdetail);
        } else {
            Object.assign(this.selecteddetail, this.currentdetail);
        }
        
        this.change_state(3);
    }
    new_traveldetail(event: any) {
        this.currentdetail = {};
        this.change_state(4);
    }
    edit_traveldetail(value: any) {
        this.selecteddetail = value;
        this.currentdetail = JSON.parse(JSON.stringify(this.selecteddetail));
        this.change_state(4);
    }

}
