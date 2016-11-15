import { NgModule } from '@angular/core';
import {CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Configuration } from './app.constants';
//import { routing } from './app.routes';
import { AppRoutingModule } from './app.routes'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
//Layouts 
import { FullLayoutComponent } from './layouts/full-layout.component'; 
import { SimpleLayoutComponent } from './layouts/simple-layout.component'; 

import { InputTextModule, CalendarModule } from 'primeng/primeng';


import { TestDataService } from './services/testDataService';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        Ng2BootstrapModule, InputTextModule, CalendarModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective
    ],
    providers: [
        TestDataService,
        Configuration
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }