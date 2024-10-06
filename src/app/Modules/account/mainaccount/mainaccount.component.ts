import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';

@Component({
  selector: 'app-mainaccount',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './mainaccount.component.html',
  styleUrl: './mainaccount.component.css'
})
export class MainaccountComponent implements OnInit {

  constructor(private myserv:MyServiceService){}

  custid = localStorage.getItem("cust_id");
  customerData: any;
  temp:any;
  profileform = new FormGroup({
    cid: new FormControl(null),
    fname: new FormControl(null),
    lname: new FormControl(null),
    mname: new FormControl(null),
    email: new FormControl(null),
    phonenum: new FormControl(null),
    address: new FormControl(null),
})

  ngOnInit(): void {

    this.myserv.getcustomerdata(this.custid).subscribe((data:any)=>{
      this.customerData = data;
      if (data && data.length > 0) {
        data.forEach((customer: any) => {
          this.profileform.setValue({
            cid: customer.cust_id,
            fname: customer.cust_fname,
            lname: customer.cust_lname,
            mname: customer.cust_mname,
            phonenum: customer.cust_phoneno,
            address: customer.cust_address,
            email: customer.cust_email,
            })
        });}
      });  
    
  }

  

  // update(){
  //   this.post.updateuser(this.profileform.value).subscribe((result:any)=>{
  //     this.temp = result;
  //     location.reload()
  //     console.log(this.temp);
  //   })
  // }

}
