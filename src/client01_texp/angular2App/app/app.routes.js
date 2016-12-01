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
                path: 'currency',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/currency/currency.module')['CurrencyModule']); }); }); }
            },
            {
                path: 'costcenter',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/costcenter/costcenter.module')['CostcenterModule']); }); }); }
            },
            {
                path: 'user',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/user/user.module')['UserModule']); }); }); }
            },
            {
                path: 'role',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/role/role.module')['RoleModule']); }); }); }
            },
            {
                path: 'phase',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/phase/phase.module')['PhaseModule']); }); }); }
            },
            {
                path: 'travelphase',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/travelphase/travelphase.module')['TravelphaseModule']); }); }); }
            },
            {
                path: 'traveltype',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/traveltype/traveltype.module')['TraveltypeModule']); }); }); }
            },
            {
                path: 'purpose',
                loadChildren: function () { return new Promise(function (resolve) { require.ensure([], function (require) { resolve(require('./_admin/purpose/purpose.module')['PurposeModule']); }); }); }
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