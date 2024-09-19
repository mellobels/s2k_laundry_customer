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

  id = localStorage.getItem("cust_id");
  history:any;
  ngOnInit(): void {
    this.post.showhis(this.id).subscribe((data:any)=>{
      this.history = data;
      console.log(this.history);
    })
   
  }

}
