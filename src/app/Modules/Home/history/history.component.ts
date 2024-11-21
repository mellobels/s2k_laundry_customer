import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'], // Fixed `styleUrls`
})
export class HistoryComponent implements OnInit {
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  cust_id = { id: localStorage.getItem('Cust_ID') };
  steps = ['Ordered', 'Shipped', 'On the way', 'Delivered'];
  currentStep = 0;

  currentDate: string | null = null;
  getDet: any[] = [];
  Transac_ID: string | null = null;

  constructor(private http: HttpClient, private service: MyServiceService) {}

  ngOnInit(): void {
    this.Transac_ID = localStorage.getItem('trans_ID');
    this.currentDate = this.formatDate(new Date());

    if (this.Transac_ID) {
      this.service.getDetails(this.Transac_ID).subscribe(
        (result: any) => {
          this.getDet = result || [];
          if (this.getDet.length > 0) {
            this.updateCurrentStep(this.getDet[0].status);
          }
          console.log('Transaction Details:', this.getDet);
        },
        (error) => {
          console.error('Error fetching transaction details:', error);
        }
      );
    }
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  tracking(stepIndex: number): void {
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      this.currentStep = stepIndex;
    }
  }

  updateCurrentStep(status: string): void {
    const stepIndex = this.steps.indexOf(status);
    if (stepIndex >= 0) {
      this.currentStep = stepIndex;
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.previewImage();
    }
  }

  previewImage(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  upload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('Cust_image', this.selectedFile, this.selectedFile.name);

      this.http
        .post(
          `http://localhost:8000/api/upload-payment-image/${this.cust_id.id}`,
          formData
        )
        .subscribe(
          () => {
            console.log('Image uploaded successfully');
          },
          (error) => {
            console.error('Error uploading image:', error);
          }
        );
    }
  }
}
