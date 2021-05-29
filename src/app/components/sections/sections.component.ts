import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit , OnChanges {
  @Input() departmentSections:any;
  flag = true;
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges()
  {
    console.log(this.departmentSections);
    this.flag = false;
  }
}
