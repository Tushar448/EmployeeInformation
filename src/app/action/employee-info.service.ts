import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import * as EmployeeResult from '../shared/beans/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
  private _jsonURL = 'assets/data/employee.json';

  constructor( private http: HttpClient) { }

  getEmployeeList(): Observable<EmployeeResult.EmployeeProperties.Employee[]> {

    return this.http.get<EmployeeResult.EmployeeProperties.Employee[]>(this._jsonURL);
  }
}
