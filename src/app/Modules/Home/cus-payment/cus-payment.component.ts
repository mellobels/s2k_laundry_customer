import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cus-payment',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './cus-payment.component.html',
  styleUrls: ['./cus-payment.component.css']
})
export class CusPaymentComponent implements OnInit {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  cust_id = localStorage.getItem('Cust_ID');
  trackingNumber = localStorage.getItem('trans_ID');

  constructor(private http: HttpClient, private router: Router) {
    this.uploadForm = new FormGroup({
      Mode_of_Payment: new FormControl(null, [Validators.required]),
      Amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
  
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        Swal.fire({
          title: 'Error!',
          text: 'Please select a valid image file (jpeg, png, jpg).',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.selectedFile = null;
        return;
      }
  
      // Preview the selected image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  upload(): void {
    if (!this.cust_id) {
      Swal.fire({
        title: 'Error!',
        text: 'Customer ID is missing. Please log in again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    if (this.uploadForm.invalid || !this.selectedFile || !this.trackingNumber) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields and select a file.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    const formData = new FormData();
    formData.append('Mode_of_Payment', this.uploadForm.get('Mode_of_Payment')?.value);
    formData.append('Amount', this.uploadForm.get('Amount')?.value);
    formData.append('Proof_filename', this.selectedFile, this.selectedFile.name); // Use backend's expected field name
    formData.append('Cust_ID', this.cust_id || '');
  
    this.http.post(`http://localhost:8000/api/upload/${this.trackingNumber}`, formData)
      .subscribe({
        next: (response) => {
           console.log(this.selectedFile)
          Swal.fire({
            title: 'Success!',
            text: 'Payment uploaded successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/main/cusmainhome/homemain/cuscurtrans']);
          });
        },
        error: (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error uploading the payment. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.error('Upload failed:', error);
        }
      });
  }
}  
