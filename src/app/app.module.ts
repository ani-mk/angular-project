import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpTableComponent } from './pages/emp-table/emp-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpDetailComponent } from './pages/emp-detail/emp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpTableComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
