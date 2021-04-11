import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import {EmployeeInfoService} from '../../../action/employee-info.service';
import * as EmployeeResult from '../../../shared/beans/employee'

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {
  id = this.router.snapshot.paramMap.get('id');
  employeeInfo: EmployeeResult.EmployeeProperties.Employee;
  editForm: FormGroup;
  firstName: string='';
  lastName: string= '';
  department: string ='';
  country: string ='';
  address: string= '';

  constructor(private router: ActivatedRoute, private employeeService: EmployeeInfoService,private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      department: "",
      address: "",
      country: ""    
    });
    // invoke the Employee list API
    this.employeeService.getEmployeeList().subscribe(
      data => this.employeeInfo = data.find((item) => item.id === parseInt(this.id)),
      err =>  this.route.navigateByUrl('/error'),
      () => {
        if(this.employeeInfo) {
        this.firstName=this.employeeInfo.firstName, 
        this.lastName = this.employeeInfo.lastname,
        this.country = this.employeeInfo.country,
        this.department = this.employeeInfo.department,
        this.address = this.employeeInfo.address
        }
      }
      )
  }
  
  // Update the Employee Info
  onSubmit(userdata: EmployeeResult.EmployeeProperties.Employee) {
    const data ={
      firstName: userdata.firstName,
      lastName: userdata.lastname,
      address: userdata.address,
      country: userdata.country,
      department: userdata.department
    }
  }

}
