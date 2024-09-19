import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../my-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cus-curtrans',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ReactiveFormsModule,RouterModule,RouterLink],
  templateUrl: './cus-curtrans.component.html',
  styleUrl: './cus-curtrans.component.css'
})
export class CusCurtransComponent implements OnInit{

  constructor(private categ: MyServiceService){}
  // categid: any;
  categid: any;
  
  ngOnInit(): void {
    this.categ.displaycateg().subscribe((result: any) =>{
      this.categid = result;
      console.log(this.categid);
    })
  }
  
  trackingNumber: string | null = null;

  // Method to generate the tracking number by calling the service
  generateTrackingNumber() {
    this.categ.getTrackingNumber().subscribe((response: any) => {
      this.trackingNumber = response.trackingNumber;
    }, error => {
      console.error('Error fetching tracking number', error); // Handle any errors
    });
  }

}
