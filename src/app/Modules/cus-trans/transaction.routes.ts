import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { MaintransComponent } from "./maintrans/maintrans.component";
import { ViewhistoryComponent } from "./viewhistory/viewhistory.component";

export const Transroute: Routes = [
    {path: 'maintrans',component: MaintransComponent,
        children: [
            {path:"viewhistory",component:ViewhistoryComponent},
            {path:"",redirectTo:"maintrans",pathMatch:"full"}
    ]

    },
    {path:"",redirectTo:'maintrans',pathMatch:'full'}

]