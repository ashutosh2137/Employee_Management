import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../services/employee.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee=new Employee();
  constructor(private employeeService: EmployeeService,private router:Router){

  }
  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.gotoEmployeeList();
    },
  error=>console.log(error));
  }
  gotoEmployeeList(){

    this.router.navigate(['/employees'])
  }
  onSubmit(){

    this.saveEmployee();
  }
}
