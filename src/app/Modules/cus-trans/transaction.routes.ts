import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { MaintransComponent } from "./maintrans/maintrans.component";
import { ViewhistoryComponent } from "./viewhistory/viewhistory.component";
import { CusPaymentComponent } from "./cus-payment/cus-payment.component";
import { HistoryComponent } from "./history/history.component";
export const Transroute: Routes = [
    {path: 'maintrans',component: MaintransComponent,
        children: [
            {path:"viewhistory",component:ViewhistoryComponent},
            {path:"history",component:HistoryComponent,
                children: [ 
                    {path:"payment", component:CusPaymentComponent},
                    {path:"",redirectTo:"payment",pathMatch:"full"}
                ]
            },
            {path:"",redirectTo:"viewhistory",pathMatch:"full"},
            { path:'maintrans',component:MaintransComponent},
            {path:"",redirectTo:"maintrans",pathMatch:"full"}
    ]

    },
    {path:"",redirectTo:'maintrans',pathMatch:'full'}

]