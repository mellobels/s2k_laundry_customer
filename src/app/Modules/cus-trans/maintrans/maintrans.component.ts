import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-maintrans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintrans.component.html',
  styleUrl: './maintrans.component.css'
})
export class MaintransComponent implements OnInit{

  constructor(private post:PostService, private router:Router){}

  id = localStorage.getItem("cust_id");
  history:any;
  ngOnInit(): void {
    this.post.showhis(this.id).subscribe((data:any)=>{
      this.history = data;
      console.log(this.history);
    })
   
  }
  showdet(tid:any){
    this.post.showdetail(tid).subscribe((result:any)=>{
      console.log(result);
     
      console.log('About to navigate to ./viewhistory');
      this.router.navigate(['/main/maintrans/sample/viewhistory', tid]);
      console.log('Navigation complete');
      
    })
  }


}
