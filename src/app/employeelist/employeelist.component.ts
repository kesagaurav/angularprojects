import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../service/employee-data.service';

  export class Employee{
    constructor(
      public id:number,
      public name:string,
      public password:string
    ){

    }
  }


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees:Employee[];
  message:string
  id:number
  //=[
    // new Employee(1,'gaurav1','deepa123456'),
    // new Employee(2,'gaurav2','deepa1234567'),
    // new Employee(3,'gaurav3','deepa1234568')

  //]//

  // employee={
  //     id:1,
  //     name:'gaurav',
  //     password:'123abc'
  // };


  constructor(private service:EmployeeDataService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.refereshEmployee();

  }


  refereshEmployee(){
    this.service.retreiveAllEmployees().subscribe(response=>{
      console.log(response);

      this.employees=response;
    });
  }


  deleteEmployee(id){
    console.log('delete the employee');
    this.service.deleteEmployee(id).subscribe(response=>{
      console.log(response);
      this.message=`Deleted Employee successfully ${id}`;
      this.refereshEmployee();

    })

  }



  updateEmployee(id){
//this.service.updateEmployee(this.id,this.employees).subscribe(data=>{
  //console.log(data);

  this.router.navigate(['employee',id]);

//})
  }

}
