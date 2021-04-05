import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employeelist/employeelist.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http:HttpClient
  ) { }

  retreiveAllEmployees(){
    return this.http.get<Employee[]>("http://localhost:9001/home");
  }


  deleteEmployee(id){
    return this.http.delete(`http://localhost:9001/home/${id}`)
  }

  updateEmployee(id,employees){
    return this.http.put(`http://localhost:9001/home/${id}`,employees);
  }

  retreiveEmployee(id){
    return this.http.get(`http://localhost:9001/home/${id}`);
  }
}
