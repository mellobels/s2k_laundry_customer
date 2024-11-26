import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';
import Swal from 'sweetalert2';

  @Component({
    selector: 'app-mainaccount',
    standalone: true,
    imports: [RouterModule,ReactiveFormsModule,CommonModule, FormsModule],
    templateUrl: './mainaccount.component.html',
    styleUrl: './mainaccount.component.css'
  })
  export class MainaccountComponent implements OnInit {
    selectedFile: any;
    imagePreview: any;
    cusid: any;
    showPassword: boolean = false;

    constructor(private myserv:MyServiceService){}


    custid = {id: localStorage.getItem("Cust_ID")};
    customerData: any;
    temp:any;
    profileform = new FormGroup({
      Cust_ID: new FormControl(this.custid.id),
      Cust_fname: new FormControl(null),
      Cust_lname: new FormControl(null),
      Cust_mname: new FormControl(null),
      Cust_email: new FormControl(null),
      Cust_phoneno: new FormControl(null),
      Cust_address: new FormControl(null),
      Cust_password: new FormControl(null),
      Cust_image: new FormControl(null)
  })

    ngOnInit(): void {
      console.log(this.custid.id)
      this.cusid = {id: localStorage.getItem("Cust_ID")};
      this.myserv.getcustomer(this.cusid.id).subscribe((data:any)=>{
        console.log(data);
        this.customerData = data.customerData;
        console.log(this.customerData)
      })
    }
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword; 
    }
    

    save() {
      console.log(this.profileform.value)
      this.myserv.updateuser(this.profileform.value).subscribe(
        (result: any) => {
          this.temp = result;
    
          // SweetAlert for success notification
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your profile has been updated successfully.',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          }).then(() => {
            // Reload or navigate after the SweetAlert success closes
            // location.reload();
          });
    
        },
        (error: any) => {
          // SweetAlert for error notification
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was an issue updating your profile. Please try again.',
            confirmButtonText: 'OK'
          });
          console.error("Error updating profile:", error);
        }
      );
    }
    

    onFileSelected(event: any){
      const file = (event.target as HTMLInputElement).files![0];
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () =>{
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);


      // this.selectedFile = event.target.files[0] as File;
      // this.previewimage();
    }

    previewimage(){
      if (this.selectedFile){

        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }

  }






