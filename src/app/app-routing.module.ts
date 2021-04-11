import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'employee-list', pathMatch: 'full'},
  {path: 'employee-list', loadChildren: () => import('./component/EmployeeInfo/employee.module').then(module => module.EmployeeModule)},
  { path: 'error', loadChildren: () => import('./component/server-error/server-error.module').then(module => module.ServerErrorModule) },
  {path: 'not-found', loadChildren: () => import('./component/not-found/not-found.module').then(module => module.NotFoundModule)},
  {path: "**", redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
