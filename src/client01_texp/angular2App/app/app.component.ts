import { Component } from '@angular/core';

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent { }
//import { Component, OnInit } from '@angular/core';

//// AoT compilation doesn't support 'require'.
////import './app.component.scss';
////import '../style/app.scss';

//@Component({
//    selector: 'my-app',
//    templateUrl: 'app.component.html'
//})

//export class AppComponent implements OnInit{
//    constructor() { }

//    public disabled: boolean = false;
//    public status: { isopen: boolean } = { isopen: false };

//    public toggled(open: boolean): void {
//        console.log('Dropdown is now: ', open);
//    }

//    public toggleDropdown($event: MouseEvent): void {
//        $event.preventDefault();
//        $event.stopPropagation();
//        this.status.isopen = !this.status.isopen;
//    }

//    ngOnInit(): void { }
//}
