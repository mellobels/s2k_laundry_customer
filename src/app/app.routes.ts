import { Routes } from '@angular/router';
import { CusSidenavComponent } from './cus-sidenav/cus-sidenav.component';
import { homeRoute } from './Modules/Home/home.routes';
import { accountroute } from './Modules/account/account.routes';
import { Transroute } from './Modules/cus-trans/transaction.routes';
import { CusLoginComponent } from './cus-login/cus-login.component';
<<<<<<< HEAD

export const routes: Routes = [
    {path:"login", component: CusLoginComponent},
=======
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:"login", component:CusLoginComponent},
    {path:"signup", component:SignupComponent},
>>>>>>> e01d224bc8a9355ad4aec57efbbe6f9cbd90fe44
    {path:"main", component: CusSidenavComponent,

        children:[
            {path:"cusmainhome",loadChildren:()=> import('./Modules/Home/home.routes').then(r=>homeRoute)},
            {path:"mainaccount",loadChildren:()=> import('./Modules/account/account.routes').then(r=>accountroute)},
            {path:"maintrans", loadChildren:()=> import('./Modules/cus-trans/transaction.routes').then(r=>Transroute)},
<<<<<<< HEAD
            {path:"",redirectTo:"cusmainhome",pathMatch:'full'}
=======
            {path:"",redirectTo:"login",pathMatch:'full'}
>>>>>>> e01d224bc8a9355ad4aec57efbbe6f9cbd90fe44
        ]
    },
    {path:"",redirectTo:"login", pathMatch:'full'}

];

