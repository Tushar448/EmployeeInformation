import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing-module';
import { EmployeeListComponent } from './EmployeeList/employee-list.component';
import { EmployeeDetailComponent } from './EmployeeDetail/employee-detail.component';
import { EditEmployeeComponent } from './EditEmployee/edit-employee.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
