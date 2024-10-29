import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  selectedFile: any;
  imagePreview: any;
  cust_id = {id:localStorage.getItem('Cust_ID')};
  // trackingNumber: {id: string | null} = {id:localStorage.getItem('Tracking_number')};

  constructor(private http: HttpClient){}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.previewImage();
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
    
  }

}
