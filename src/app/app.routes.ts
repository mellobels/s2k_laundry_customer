import { Routes } from '@angular/router';
import { CusSidenavComponent } from './cus-sidenav/cus-sidenav.component';
import { homeRoute } from './Modules/Home/home.routes';
import { accountroute } from './Modules/account/account.routes';
import { Transroute } from './Modules/cus-trans/transaction.routes';

export const routes: Routes = [
    {path:"main", component: CusSidenavComponent,
        children:[
            {path:"cusmainhome",loadChildren:()=> import('./Modules/Home/home.routes').then(r=>homeRoute)},
            {path:"mainaccount",loadChildren:()=> import('./Modules/account/account.routes').then(r=>accountroute)},
            {path:"maintrans", loadChildren:()=> import('./Modules/cus-trans/transaction.routes').then(r=>Transroute)},
            {path:"",redirectTo:"home",pathMatch:'full'}
        ]
    },
    {path:"",redirectTo:"main", pathMatch:'full'}

];
