import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = "http://localhost/CustomerS2K/";
  Apiurl="http://localhost:8000/api/";

  constructor(
    private http: HttpClient
  ) { }
  
  checklogin(log: any){
    return this.http.post(this.url + 's2klogin.php',JSON.stringify(log));
  }
  login(data: any){
    return this.http.post(this.Apiurl + 'login',data);
  }

  displaycateg(){
    return this.http.get(this.url + 's2kdisplaycategory.php');
  }
  getTrackingNumber() {
    return this.http.get(this.url + 'generate_tracking.php');
  }
  showhis(gdata:any){
    return this.http.get(this.url + 'get_history.php?cust_id='+ gdata);
  }
}
