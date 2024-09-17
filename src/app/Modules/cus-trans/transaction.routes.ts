import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { MaintransComponent } from "./maintrans/maintrans.component";
import { ViewhistoryComponent } from "./viewhistory/viewhistory.component";
import { SampleComponent } from "./sample/sample.component";

export const Transroute: Routes = [
    {path: 'sample',component: SampleComponent,
        children: [
            { path: 'viewhistory/:tid', component: ViewhistoryComponent },
            { path:'maintrans',component:MaintransComponent},
            {path:"",redirectTo:"maintrans",pathMatch:"full"}
    ]

    },
    {path:"",redirectTo:'sample',pathMatch:'full'}

]