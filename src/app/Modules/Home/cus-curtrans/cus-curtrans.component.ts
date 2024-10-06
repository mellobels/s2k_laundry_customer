import { CommonModule } from '@angular/common';
import { Component,ElementRef,inject,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


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
  
  constructor(private elementRef: ElementRef){}

  list: any;
  trackingNumber:any;
  customerdata:any
  id = localStorage.getItem('cust_id');

  
  category:any;
  qty:any;

  laundrylist = this.post.post; 

  newtransac = new FormGroup({
    laundryType: new FormControl(null),
    count: new FormControl(null),
    serviceType: new FormControl(null),
    Categ: new FormControl(null)
  })
  
  addToList() {
    const laundryType = (document.getElementById('laundryType') as HTMLInputElement).value;
    const count = (document.getElementById('weight') as HTMLInputElement).value;
    if(laundryType && count != null){
      const newItem = {
        category: laundryType,
        qty: count,
      };
      this.laundrylist.push(newItem);
      console.log(this.laundrylist);
    }
  }

// removeFromList(item: any) {
//   const index = this.laundrylist.indexOf(item);
//   if (index !== -1) {
//     this.laundrylist.splice(index, 1);
//     console.log(this.laundrylist);
//   }
// }

// ngAfterViewInit() {
//   const modalElement = this.elementRef.nativeElement.querySelector('#myModal');
//   modalElement.addEventListener('hidden.bs.modal', () => {
//     this.laundrylist = []; // Reset the laundrylist array
//     console.log(this.laundrylist);
//   });
// }
  
fetchransactions(){
  this.post.display().subscribe((data:any)=>{
    this.trans = data.transaction;
    console.log(this.trans);
  })
}
  ngOnInit(): void{
    this.post.displaytransaction().subscribe((data:any)=>{
      this.customerdata = data.transactions;
      console.log(this.customerdata);
    })
    this.fetchransactions();
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
   
  }
  updateItem() {
    // Implement logic to update the item based on tracking number
    console.log();
  }

  viewItem() {
    // Implement logic to view details of the item based on tracking number
    console.log();
  }

  insert(){
    console.log(this.newtransac.value)
    // this.post.insertorder(this.id, this.trackingNumber, this.qty).subscribe((data:any)=>{
    //   const a = data;
    //   console.log(a);
    //   console.log(data);
    //   this.laundrylist = [];
    //   this.fetchransactions();
    // })

  }

}
