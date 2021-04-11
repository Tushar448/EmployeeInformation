import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {EmployeeInfoService} from '../../../action/employee-info.service';
import * as EmployeeResult from '../../../shared/beans/employee'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employeeDetail: EmployeeResult.EmployeeProperties.Employee
  // get employee ID
  id = this.router.snapshot.paramMap.get('id');

  constructor(private router: ActivatedRoute, private employeeService: EmployeeInfoService) { }
  ngOnInit() {
    // invoke the Employee list API
    this.employeeService.getEmployeeList().subscribe(
      data => this.employeeDetail = data.find((item) => item.id === parseInt(this.id)) )
  }

}
