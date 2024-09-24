import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-cus-login',
  standalone: true,
  imports: [RouterModule,RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './cus-login.component.html',
  styleUrl: './cus-login.component.css'
})
export class CusLoginComponent implements OnInit{
  constructor(private myserv: MyServiceService, private route: Router){}
  
    loginForm =new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
})
logdata: any;
  ngOnInit(): void {  
 }
 login(){
  this.myserv.login(this.loginForm.value).subscribe((result:any)=>{
    console.log(result);
    const token = result.token;
    console.log('Token: ', token);
    localStorage.setItem('authToken: ', token);
    if(token != null){
          this.route.navigate(['/main/cusmainhome']);
          localStorage.setItem("cust_id",result.cust_id);
        }else{
          console.log("ERROR login");
        }
      })}
 }
