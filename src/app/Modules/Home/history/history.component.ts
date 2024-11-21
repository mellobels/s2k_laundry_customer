import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  selectedFile: any;
  imagePreview: any;
  cust_id = {id:localStorage.getItem('Cust_ID')};
  steps = ['Ordered', 'Shipped', 'On the way', 'Delivered'];
  currentStep = 0;

  currentDate:any;
  getDet:any;
  Transac_ID:any;
  track:any;
  detget: any;
  service: any;
  // trackingNumber: {id: string | null} = {id:localStorage.getItem('Tracking_number')};

  constructor(private http: HttpClient, service:MyServiceService){}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.previewImage();
  }
  tracking(stepIndex: any) {
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      this.currentStep = stepIndex;
    }
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Update image preview with selected file
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  upload(){
    // console.log(this.trackingNumber);
    // if(this.selectedFile){{
    //   const formData = new FormData();
    //   formData.append('Cust_image', this.selectedFile, this.selectedFile.name);

    //   this.http.post(`http://localhost:8000/api/upload-payment-image/${this.cust_id.id}`, formData)
    //   .subscribe()
    // }}
  }
  
  ngOnInit(): void {
    this.Transac_ID = localStorage.getItem('temp_ID');
      console.log(this.Transac_ID);
      // this.currentDate = this.formatDate(new Date());
      this.service.getDetails(this.Transac_ID).subscribe((result:any)=>{
        this.getDet = result;
        this.track = result.Tracking_number;
        this.detget = this.tracking(this.getDet[0].status);
        // console.log(this.trackingnumber);
        console.log(this.getDet[0].status);
        console.log(result)
        console.log(this.detget);
      })
    
  }

}
