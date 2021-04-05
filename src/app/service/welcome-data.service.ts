import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Welcome{
    constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
   private http:HttpClient
  ) { }
  exceuteHelloWorldService(){
    return this.http.get<Welcome>("http://localhost:9001/welcome",{responseType:"json"});
    //console.log("hi welcome to the full stack application");

  }
}
