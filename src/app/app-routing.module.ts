import { NotFoundComponent } from './components/not-found/not-found.component';
import { SectionsComponent } from './components/sections/sections.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , component : DepartmentsComponent},
  {path : 'sections' , component : SectionsComponent},
  {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
