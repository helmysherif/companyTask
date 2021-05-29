import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { SectionsComponent } from './components/sections/sections.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    SectionsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
