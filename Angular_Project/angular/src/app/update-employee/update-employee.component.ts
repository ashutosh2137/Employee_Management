import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id:number=0;
  employee: Employee=new Employee();

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router){
  }
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    }, 
    error => console.log(error));
  }
  onSubmit(){

    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoList();
    },error=>console.log(error));
  }
  gotoList(): void {
    this.router.navigate(['/employees']);
  }
 
}
