import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = "http://localhost/CustomerS2K/";
  Apiurl="http://localhost:8000/api/";

  public post: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  displaycategory(){
    return this.http.get(this.Apiurl + 'laundycateg');
  }

  display(){
    return this.http.get(this.Apiurl + 'display');
  }

  addtrans(data: any){
    return this.http.post(this.Apiurl + 'addtrans', data);
  }
  updatetrans(data: any){
    return this.http.get(`${this.Apiurl}cancelTrans/${data}`)
  }

  insertorder(idata:any,trackingNumber:any,qty:any){
    const data = {
      laundry: this.post,
      id:idata,
      qty: qty,
      trackingNumber:trackingNumber
    }
    console.log(data);
    return this.http.post(this.url + 'insertorder.php', JSON.stringify(data));
  }
  
  // checklogin(log: any){
  //   return this.http.post(this.url + 's2klogin.php',JSON.stringify(log));
  // }
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
  // displaytransaction() {
  //   return this.http.get(this.Apiurl + 'display');
  // }
  showdetail(tid:any){
    return this.http.get(this.url + 'showdet.php?transac_id=' + tid);
  }

  getcustomerdata(data:any){
    return this.http.get(this.url + 'getcustomer.php?id=' + data);
  }

  updateuser(udata:any){
    return this.http.post(this.url + 'updateuser.php',JSON.stringify(udata));
  }

  gentracknum(){
    return this.http.get(this.url + 'tracknum.php');
  }
}
