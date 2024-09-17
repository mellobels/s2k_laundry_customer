import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cus-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './cus-login.component.html',
  styleUrl: './cus-login.component.css'
})
export class CusLoginComponent implements OnInit{

  constructor(private post: PostService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })

  logdata: any;
  
  ngOnInit(): void {
   
  }

  submit(){
    //console.log(this.loginForm.value);
    const mdiv = document.getElementById('warningmodal');
    if(this.loginForm.controls['email'].value == null || this.loginForm.controls['password'].value == null){
      mdiv!.style.display = 'block';
        }else{
      this.post.checklogin(this.loginForm.value)
      .subscribe((result:any)=>{
        const token = result.token;
        console.log('Token: ', token);
        localStorage.setItem('authToken: ', token);
       
        //console.log(result);
        this.logdata = result;
        console.log(this.logdata)
        console.log('Received response from Laravel:', result);
        // if(this.logdata != 0){
        //   this.router.navigate(['/main/cusmainhome']);
        //   localStorage.setItem("cust_id",result.cust_id);
        // }
        this.router.navigate(['/main/cusmainhome']);
        localStorage.setItem("cust_id",result.cust_id);
        // if(token != null){
        //   this.router.navigate(['/main/cusmainhome']);
        //   localStorage.setItem("cust_id",result.cust_id);
        // }else{
        //   console.log("ERROR login");
        // }
      })}
    
  }

      closeModal(){
        const mdiv = document.getElementById('warningmodal');
        if(mdiv!=null){
          mdiv.style.display = 'none';
        }
      }

      closeModal2(){
        const mdiv = document.getElementById('warningmodal2');
        if(mdiv!=null){
          mdiv.style.display = 'none';
        }
      }

}



//LARAVEL ITO
// submit(){
//   //console.log(this.loginForm.value);
//   const mdiv = document.getElementById('warningmodal');
//   if(this.loginForm.controls['email'].value == null || this.loginForm.controls['password'].value == null){
//     mdiv!.style.display = 'block';
//       }else{
//     this.post.login(this.loginForm.value)
//     .subscribe((result:any)=>{
//       const token = result.token;
//       console.log('Token: ', token);
//       localStorage.setItem('authToken: ', token);
     
//       //console.log(result);
//       this.logdata = result;
//       console.log(this.logdata)
//       console.log('Received response from Laravel:', result);
//       // if(this.logdata != 0){
//       //   this.router.navigate(['/main/cusmainhome']);
//       //   localStorage.setItem("cust_id",result.cust_id);
//       // }
//       if(token != null){
//         this.router.navigate(['/main/cusmainhome']);
//         localStorage.setItem("cust_id",result.cust_id);
//       }else{
//         console.log("ERROR login");
//       }
//     })}
  
// }