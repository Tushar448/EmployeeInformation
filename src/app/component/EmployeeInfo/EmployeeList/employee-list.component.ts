import { Component, OnInit } from '@angular/core';

import {EmployeeInfoService} from '../../../action/employee-info.service';
import * as EmployeeResult from '../../../shared/beans/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  pageTitle : string = 'Employee List';
  employeeList: EmployeeResult.EmployeeProperties.Employee[]
  isAddEmployee: boolean = false;
  employeeId: number;
  firstName: string = "";
  lastname: string ="";
  department: string = "";
  
  constructor(private employeeService: EmployeeInfoService) { }

  ngOnInit() {
    // invoke the Employee list API
    this.employeeService.getEmployeeList().subscribe(
      data => this.employeeList = data )
  }

  // delet Employee from the List
  deleteEmployee(data: EmployeeResult.EmployeeProperties.Employee) {
    const deleteData = this.employeeList.filter((item: EmployeeResult.EmployeeProperties.Employee) => item.id !== data.id)
    this.employeeList = deleteData;
  }

  // add Employee from the List
  addEmployee() {
    this.isAddEmployee = true;
  }

  // cancel to add Employee from the List
  Cancel() {
    this.isAddEmployee = false;
  }

  // reset add Employee data after save new employee
  resetValue() {
    this.firstName ="";
    this.lastname ="";
    this.department ="";
    this.employeeId = 0;
  }

  //  add Employee into  employee List array
  SaveData() {
      const data = {
        "id": this.employeeId,
        "firstName": this.firstName,
        "lastname": this.lastname,
        "address": "Alpha 1, GreaterNoid",
        "country":"India",
        "department": this.department
      }
      this.employeeList.push(data);
      this.resetValue();
      this.isAddEmployee = false;
  }
}
