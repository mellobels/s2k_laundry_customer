import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  url = "http://localhost/s2k/";
  apiUrl = "http://localhost:8000/api/";

  public post: any[] = [];

  constructor(private http: HttpClient) { }

  insertorder(idata:any){

    // console.log('Payload:', data);
    const data = {
      laundry: this.post,
      id: idata
    }
    console.log(data);
    return this.http.post(this.url + 'insertorder.php', JSON.stringify(data));
  }

  getlist(){
    return this.http.get(this.url + 'getlist.php');
  }

  savesignup(sdata:any){
    return this.http.post(this.url + 'savesignup.php', JSON.stringify(sdata));
  }

  checklogin(ldata:any){
    return this.http.post(this.url + 'checklogin.php', JSON.stringify(ldata));
  }

  showhis(gdata:any){
    return this.http.get(this.url + 'gethis.php?cust_id='+ gdata);
  }

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
  //GUMAGANA ITO
  login(data:any){
    return this.http.post(this.apiUrl + 'login',data);
  }

}
