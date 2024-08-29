import { Routes } from '@angular/router';
import { CusAccountComponent } from './cus-account/cus-account.component';
import { MainAccountComponent } from '../../../../../S2kadmin/capstone-admin/src/app/Modules/account/main-account/main-account.component';
import { accountRoute } from '../../../../../S2kadmin/capstone-admin/src/app/Modules/account/account.routes';

export const accountroute: Routes = [
    {path:"main", component: MainAccountComponent,
        children:[
            {path:'account',component: CusAccountComponent},
            {path:'',redirectTo:'account', pathMatch:'full'}
        ]
    },
    {path:"",redirectTo:"main", pathMatch:'full'}

];
