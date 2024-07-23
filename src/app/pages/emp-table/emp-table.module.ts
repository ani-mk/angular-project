import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpTableRoutingModule } from './emp-table-routing.module';
import { EmpTableComponent } from './emp-table.component';


@NgModule({
  declarations: [EmpTableComponent],
  imports: [
    CommonModule,
    EmpTableRoutingModule
  ]
})
export class EmpTableModule { }
