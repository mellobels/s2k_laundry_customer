import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';

@Component({
  selector: 'app-viewhistory',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './viewhistory.component.html',
  styleUrl: './viewhistory.component.css'
})
export class ViewhistoryComponent implements OnInit{

  transDet_ID:any;
  temp:any;

  histf: any[] = []; // Original data source
  filteredHist: any[] = [];
  router: any;

  constructor(private post: MyServiceService){}

  id = localStorage.getItem("Cust_ID");
  history:any;
  ngOnInit(): void {
    console.log(this.id)
    this.post.displayTransac(1).subscribe((data:any)=>{
      this.history = data;
      console.log(this.history);
    })
   
  }

  filterStatus(status: string): void {
    if (status === 'All') {
      // Show all items if "All" is selected
      this.filteredHist = this.histf;
    }else if(status === 'for Release'){
      this.filteredHist = this.histf.filter(h=> h.Transac_status === status);
    }else{
      // Filter by selected status
      this.filteredHist = this.histf.filter(h => h.Transac_status === status);
    }
  }

  
  viewItem(data: any) {
    // Implement logic to view details of the item based on tracking number
    this.post.getTransId(data).subscribe((result:any)=>{
    this.transDet_ID = data;
    this.temp = data;
    console.log(this.temp);
    console.log(result);
    // console.log("ITO ANG PRIMARY KEY: ", this.transDet_ID);
    console.log("ITO ANG PRIMARY KEY: ", this.temp);
    localStorage.setItem('temp_ID', this.temp);
    this.router.navigate(['/main/maintrans/maintrans/panel/historydetails']);
    });
    
  }

}

