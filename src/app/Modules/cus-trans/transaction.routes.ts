import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { MaintransComponent } from "./maintrans/maintrans.component";
import { ViewhistoryComponent } from "./viewhistory/viewhistory.component";
<<<<<<< HEAD
import { HistoryComponent } from "./history/history.component";
=======
import { SampleComponent } from "./sample/sample.component";
>>>>>>> e01d224bc8a9355ad4aec57efbbe6f9cbd90fe44

export const Transroute: Routes = [
    {path: 'sample',component: SampleComponent,
        children: [
<<<<<<< HEAD
            {path:"viewhistory",component:ViewhistoryComponent},
            {path:"",redirectTo:"viewhistory",pathMatch:"full"}
=======
            { path: 'viewhistory/:tid', component: ViewhistoryComponent },
            { path:'maintrans',component:MaintransComponent},
            {path:"",redirectTo:"maintrans",pathMatch:"full"}
>>>>>>> e01d224bc8a9355ad4aec57efbbe6f9cbd90fe44
    ]

    },
    {path:"",redirectTo:'sample',pathMatch:'full'}

]