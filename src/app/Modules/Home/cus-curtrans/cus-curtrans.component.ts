import { CommonModule } from '@angular/common';
import { Component,ElementRef,inject,OnInit } from '@angular/core';
import { Router, RouteReuseStrategy, RouterLink } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cus-curtrans',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './cus-curtrans.component.html',
  styleUrl: './cus-curtrans.component.css'
})
export class CusCurtransComponent implements OnInit{

  post = inject(MyServiceService);
  categ: any;
  trans: any;
  MyServiceService: any;
  
  constructor(
    private route: Router,
    private user: MyServiceService
  
  ){}

  list: any;
  trackingNumber:any;
  customerdata:any
  id = localStorage.getItem('Cust_ID');
  trans_id: {id: string | null} = {id: localStorage.getItem('Tracking_Number')};

  
  category:any;
  qty:any;

  laundrylist = this.post.post; 

  newtransac = new FormGroup({
    Tracking_number: new FormControl(null),
    Cust_ID: new FormControl("1"),
    Qty: new FormControl(this.laundrylist),
    Transac_status: new FormControl(null),
    Categ_ID: new FormControl(this.laundrylist)
  })
  
  // addToList() {
  //   const laundryType = (document.getElementById('laundryType') as HTMLInputElement).value;
  //   const count = (document.getElementById('weight') as HTMLInputElement).value;
  //   if(laundryType && count != null){
  //     const newItem = {
  //       Categ_ID: laundryType,
  //       Qty: count,
  //     };
  //     this.laundrylist.push(newItem);
  //     console.log(this.laundrylist);

  //     const laundryTypes = (document.getElementById('laundryType') as HTMLInputElement);
  //     laundryTypes.value = '';

  //     const counts = (document.getElementById('weight') as HTMLInputElement);
  //     counts.value = '';
  //   }
  // }

  addToList() {
    // Cast the select element to HTMLSelectElement
    const selectElement = document.getElementById('laundryType') as HTMLSelectElement;
    const laundryType = selectElement.value;
  
    // Access the input element for the weight/quantity
    const count = (document.getElementById('weight') as HTMLInputElement).value;
  
    // Ensure that both laundryType and count are present
    if (laundryType && count != null) {
      const newItem = {
        Categ_ID: laundryType,
        Category: selectElement.options[selectElement.selectedIndex].text, // Access options and selectedIndex from HTMLSelectElement
        Qty: count,
      };
  
      this.laundrylist.push(newItem);
      console.log(this.laundrylist);
  
      // Reset the dropdown and input field values
      selectElement.value = '';
      (document.getElementById('weight') as HTMLInputElement).value = '';
    }
  }
  

  fetchransactions(){
    this.post.display().subscribe((data:any)=>{
      this.trans = data.transaction;
      if(this.trans && this.trans.length > 0){
        const pendingTransactions = this.trans.filter((transs: any) => transs.Transac_status === 'handWash' || transs.Transac_status === 'press' || transs.Transac_status === 'rush' || transs.Transac_status === 'pick' || transs.Transac_status === 'deliver');

        if(pendingTransactions.length > 0){
          console.log('Pending Trans', pendingTransactions);
          this.trans = pendingTransactions;
        } else {
          console.log( "no pending")
          this.trans = [];
        }
      }
      console.log(this.trans);
    })
  }
  ngOnInit(): void{
    // this.fetchransactions();
    console.log(this.id)

    // this.post.displaytransaction().subscribe((data:any)=>{
    //   this.customerdata = data.transactions;
    //   console.log(this.customerdata);
    // })

    this.post.displaycategory().subscribe((data:any)=>{
      this.categ = data;
      console.log(this.categ);
    })
    this.post.display().subscribe((data:any)=>{
      this.trans = data.transaction;
      this.fetchransactions();
      console.log(this.trans);
    })
  }

  gentrack(){
   const randomNumber = Math.floor(Math.random() * 1000000000000) + 100000000000;
   this.trackingNumber = `S2K-${randomNumber}`;

   this.newtransac.controls['Tracking_number'].setValue(this.trackingNumber);
   
  }
  updateItem() {
    console.log();
  }

  viewItem() {
    // Implement logic to view details of the item based on tracking number
    console.log();
  }
  cancelItem(id: any){
    console.log(id);
    // if (this.newtransac.valid) {
      // const updatedData = { id: this.trans_id.id, ...this.newtransac.value };
      this.user.updatetrans(id).subscribe(
        (response: any) => {
          // location.reload();
          console.log('Update successful', response);
          Swal.fire('Success!', 'Laundry Category Price details updated successfully.', 'success').then(() => {
            location.reload(); // Reload the page after the alert is closed
          });
          this.route.navigate(['/main/cusmainhome/homemain/cuscurtrans']);
        },
        error => {
          console.error('Update failed', error);
          Swal.fire('Error!', 'There was an error updating the category.', 'error');
        }
      );
    // } else {
    //   Swal.fire('Warning!', 'Please fill in all required fields.', 'warning');
    // }
    
  }


  insert() {
    // Ensure the form data is properly patched before making the API call
    const categories = this.laundrylist.map(item => item.Categ_ID);
    const quantities = this.laundrylist.map(item => item.Qty);
  
    // Check if there are any items in the list
    if (categories.length === 0 || quantities.length === 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please add at least one item to the list before saving!",
        showConfirmButton: true,
      });
      return;
    }
  
    // Patch the form data
    this.newtransac.patchValue({
      Categ_ID: categories,
      Qty: quantities,
    });
  
    // Log the patched value to verify
    console.log("Patched Transaction Data:", this.newtransac.value);
  
    // Debugging: Validate the data before making the API call
    if (!this.newtransac.value.Tracking_number || !this.newtransac.value.Cust_ID) {
      console.error('Missing required fields:', this.newtransac.value);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Missing required fields! Please check the form data.",
        showConfirmButton: true,
      });
      return;
    }
  
    // Make the API call with validated data
    this.post.addtrans(this.newtransac.value).subscribe(
      (result: any) => {
        // Check if the response is successful
        if (result && result.message === 'Transaction details added successfully') {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Transaction details added successfully!",
            showConfirmButton: true,
          }).then(() => {
            // Redirect to the desired route after success
            this.route.navigate(['/main/cusmainhome/homemain/cuscurtrans']);
            this.fetchransactions();
          });
        } else {
          console.error('Unexpected response:', result);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error occurred during saving: " + (result.message || 'Unknown error'),
            showConfirmButton: true,
          });
        }
      },
      (error) => {
        // Log the error to see the exact issue
        console.error('API Error:', error);
  
        // Show detailed error message in the alert
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "An error occurred while saving. Please try again.",
          text: error.message || 'No additional error details provided by the server',
          showConfirmButton: true,
        });
      }
    );
    
  }
  
  
}
