import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

//import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home'
        , pathMatch: 'full'
    },
    //{
    //    path: '',
    //    component: 'company',
    //    pathMatch: 'full'
    //},
    //{
    //    path: '',
    //    redirectTo: 'dashboard',
    //    pathMatch: 'full',
    //},
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
                //component: HomeComponent
                //loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/company/company.module')['CompanyModule']); }); })
            },
            {
                path: 'currency',
                //component: HomeComponent
                //loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/currency/currency.module')['CurrencyModule']); }); })
            },
            {
                path: 'costcenter',
                //component: HomeComponent
                //loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/costcenter/costcenter.module')['CostcenterModule']); }); })
            },
            {
                path: 'user',
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/user/user.module')['UserModule']); }); })
            },
            {
                path: 'role',
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/role/role.module')['RoleModule']); }); })
            },
            {
                path: 'phase',
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/phase/phase.module')['PhaseModule']); }); })
            },
            {
                path: 'travelphase',
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/travelphase/travelphase.module')['TravelphaseModule']); }); })
            },
            {
                path: 'traveltype',
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/traveltype/traveltype.module')['TraveltypeModule']); }); })
            },
            {
                path: 'purpose',
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./_admin/purpose/purpose.module')['PurposeModule']); }); })
            },

            {
                path: 'dashboard',
                //component: HomeComponent
                //loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./dashboard/dashboard.module')['DashboardModule']); }); })
            },
            {
                path: 'components',
                //loadChildren: 'app/components/components.module#ComponentsModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./components/components.module')['ComponentsModule']); }); })
            },
            {
                path: 'icons',
                //loadChildren: 'app/icons/icons.module#IconsModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./icons/icons.module')['IcosModule']); }); })
            },
            {
                path: 'widgets',
                //loadChildren: 'app/widgets/widgets.module#WidgetsModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./widgets/widgets.module')['WidgetsModule']); }); })
            },
            {
                path: 'charts',
                //loadChildren: 'app/chartjs/chartjs.module#ChartJSModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./chartjs/chartjs.module')['ChartJSModule']); }); })
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        }//,
        //children: [
        //    {
        //        path: '',
        //        loadChildren: 'app/pages/pages.module#PagesModule',
        //    }
        //]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
