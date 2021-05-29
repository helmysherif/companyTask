import { DepartmentService } from './../../services/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  allDepartments:any = [];
  sections:any;
  constructor(public _departmentService:DepartmentService) {
    _departmentService.displayAllDepartments().subscribe(res => {
      this.allDepartments = res.alldepartments;
      console.log(res);
    })
   }
   displayDepSection(id:any)
   {
      this._departmentService.displayDepartmentSections(id).subscribe(res => {
        this.sections = res.departmentSections.sectionID.name;
      })
   }
  ngOnInit(): void {
  }
}
