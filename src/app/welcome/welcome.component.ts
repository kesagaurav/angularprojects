import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


    welcomeMessageFromService:string

  constructor(private service:WelcomeDataService) { }

  ngOnInit(): void {
  }

  getWelcomeMessage(){
   console.log(this.service.exceuteHelloWorldService());
   this.service.exceuteHelloWorldService().subscribe(
     response=> this.handleSuccessfulResponse(response)
   );
   console.log('the last line is comleted');


  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message;
 //   console.log(response.message);

  }

}
