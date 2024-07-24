import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpDetailRoutingModule } from './emp-detail-routing.module';
import { AppModule } from 'src/app/app.module';
import { EmpDetailComponent } from './emp-detail.component';


@NgModule({
  declarations: [EmpDetailComponent],
  imports: [
    CommonModule,
    EmpDetailRoutingModule,
    AppModule
  ]
})
export class EmpDetailModule { }
