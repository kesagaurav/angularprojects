import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employeelist/employeelist.component';
import { EmployeeDataService } from '../service/employee-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id:number

    employee:Employee

  constructor(private service:EmployeeDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    // this.service.retreiveEmployee(this.id).subscribe(
    //   data=> this.employee=data;
    // )
  }


  saveEmployee(){
      this.service.updateEmployee(this.id,this.employee).subscribe(
        data=> {
          console.log(data);
          this.router.navigate(['employees']);
        }

      )
  }

}
