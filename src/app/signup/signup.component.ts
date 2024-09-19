import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  
  signupForm = new FormGroup({ 
    cust_fname: new FormControl(null),
    cust_lname: new FormControl(null),
    cust_mname: new FormControl(null),
    cust_phoneno: new FormControl(null),
    cust_email: new FormControl(null),
    cust_address: new FormControl(null),
    cust_password: new FormControl(null),
    cust_retypePass: new FormControl(null),
  })

  constructor(private post:PostService){}

  ngOnInit(): void {
      
  }

  signup(){
    //constant for modal
    const mdiv = document.getElementById('warningmodal');
    const mdiv1 = document.getElementById('warningmodalemail');
    //check if entered password is equal
    if(this.signupForm.controls['cust_fname'].value == null||this.signupForm.controls['cust_email'].value == null || this.signupForm.controls['cust_fname'].value == null|| this.signupForm.controls['cust_lname'].value == null|| this.signupForm.controls['cust_mname'].value == null||this.signupForm.controls['cust_phoneno'].value == null||this.signupForm.controls['cust_address'].value == null){
     mdiv1!.style.display = 'block';
    }
    else if(this.signupForm.controls['cust_password'].value == this.signupForm.controls['cust_retypePass'].value){
      this.post.savesignup(this.signupForm.value)
      .subscribe((result:any)=>{
        console.log(result)
        // if(result=='Success'){
        //   route to login
        //   this.route.navigate(['/login'])
        // }
      })
    }else{
      if(mdiv!=null){
        //display modal
        mdiv.style.display = 'block';
      }
    }
  }


  //method to close the modal
  closeModal(){
    const mdiv = document.getElementById('warningmodal');
    if(mdiv!=null){
      mdiv.style.display = 'none';
    }
  }

  closeModalemail(){
    const mdiv = document.getElementById('warningmodalemail');
    if(mdiv!=null){
      mdiv.style.display = 'none';
    }
  }

}
