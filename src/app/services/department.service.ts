import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private _HttpClient:HttpClient) { }
  displayAllDepartments():Observable<any>
  {
    return this._HttpClient.get('https://company-app1.herokuapp.com/');
  }
  displayDepartmentSections(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://company-app1.herokuapp.com/department/${id}`);
  }
}
