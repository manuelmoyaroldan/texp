var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { HomeComponent } from './home/home.component';
export var routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'App'
        },
        children: [
            {
                path: 'Home',
                component: HomeComponent,
                data: {
                    title: 'Home'
                }
            },
            {
                path: 'company',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/company/company.module')['CompanyModule']); }); }); }
            },
            {
                path: 'dashboard',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./dashboard/dashboard.module')['DashboardModule']); }); }); }
            },
            {
                path: 'components',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./components/components.module')['ComponentsModule']); }); }); }
            },
            {
                path: 'icons',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./icons/icons.module')['IcosModule']); }); }); }
            },
            {
                path: 'widgets',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./widgets/widgets.module')['WidgetsModule']); }); }); }
            },
            {
                path: 'charts',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./chartjs/chartjs.module')['ChartJSModule']); }); }); }
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        }
    }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app.routes.js.map