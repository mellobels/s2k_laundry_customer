import { Routes } from '@angular/router';
import { CusAccountComponent } from './cus-account/cus-account.component';
import { MainaccountComponent } from './mainaccount/mainaccount.component';


export const accountroute: Routes = [
    {path:"main", component: MainaccountComponent,
        children:[
            {path:'account',component: CusAccountComponent},
            {path:'',redirectTo:'main', pathMatch:'full'}
        ]
    },
    {path:"",redirectTo:"main", pathMatch:'full'}

];
