import { Routes } from '@angular/router';
import { CusSidenavComponent } from './cus-sidenav/cus-sidenav.component';
import { homeRoute } from './Modules/Home/home.routes';

export const routes: Routes = [
    {path:"main", component: CusSidenavComponent,
        children:[
            {path:"home",loadChildren:()=> import('./Modules/Home/home.routes').then(r=>homeRoute)},
            {path:"",redirectTo:"home",pathMatch:'full'}
        ]
    },
    {path:"",redirectTo:"main", pathMatch:'full'}

];
