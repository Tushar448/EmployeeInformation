import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './EmployeeList/employee-list.component';
import { EmployeeDetailComponent } from './EmployeeDetail/employee-detail.component';
import { EditEmployeeComponent } from './EditEmployee/edit-employee.component';

const routes: Routes = [
  { path: '' , children: [
    {path: '' , component: EmployeeListComponent},
   { path:'employee-detail/:id', component: EmployeeDetailComponent },
   { path:'employee-edit/:id', component: EditEmployeeComponent }

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
