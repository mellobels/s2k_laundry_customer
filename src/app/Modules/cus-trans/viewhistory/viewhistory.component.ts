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

  constructor(private post: MyServiceService){}

  id = localStorage.getItem("Cust_ID");
  history:any;
  ngOnInit(): void {
    console.log(this.id)
    this.post.displayTransac(1).subscribe((data:any)=>{
      this.history = data.trans;
      console.log(this.history);
    })
   
  }

}
