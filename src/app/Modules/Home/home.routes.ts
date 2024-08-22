import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { CusMainhomeComponent } from "./cus-mainhome/cus-mainhome.component";
import { CusCurtransComponent } from './cus-curtrans/cus-curtrans.component';

export const homeRoute: Routes = [
    {path: 'homemain',component: CusMainhomeComponent,
        children: [
            {path:"custrans",component:CusCurtransComponent},
            {path:"",redirectTo:"custrans",pathMatch:"full"}
    ]

    },
    {path:"",redirectTo:'homemain',pathMatch:'full'}

]