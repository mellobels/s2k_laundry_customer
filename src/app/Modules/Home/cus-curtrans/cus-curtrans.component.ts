import { CommonModule } from '@angular/common';
import { Component,ElementRef,inject,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';


@Component({
  selector: 'app-cus-curtrans',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cus-curtrans.component.html',
  styleUrl: './cus-curtrans.component.css'
})
export class CusCurtransComponent implements OnInit{

  post = inject(MyServiceService);
  
  constructor(private elementRef: ElementRef){}

  list: any;
  trackingNumber:any;
  customerdata:any
  id = localStorage.getItem('cust_id');

  
  category:any;
  qty:any;

  // laundrylist = this.post.post; 
  
//   addToList() {
//     const laundryType = (document.getElementById('browser') as HTMLInputElement).value;
//     const count = (document.getElementById('weight') as HTMLInputElement).value;
//     if(laundryType && count != null){
//     const newItem = {
//       category: laundryType,
//       qty: count,
    
//     };
//     this.laundrylist.push(newItem);
//     console.log(this.laundrylist);
//   }
// }

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
  
  ngOnInit(): void{
    this.post.displaycateg().subscribe((data:any)=>{
      this.category = data;
      console.log(data);
    })
    // this.post.getcustomerdata(this.id).subscribe((data:any)=>{
    //   this.customerdata = data;
    //   console.log(data);
    // })
  }

  gentrack(){
   const randomNumber = Math.floor(Math.random() * 1000000000000) + 100000000000;
   this.trackingNumber = `S2K-${randomNumber}`;
   
  }

  // insert(){
  //   this.post.insertorder(this.id).subscribe((data:any)=>{
  //     const a = data;
  //     console.log(a);
  //     console.log(data);
      
  //   })

  // }

}
