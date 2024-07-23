import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpTableComponent } from './emp-table.component';

const routes: Routes = [{
  path= '',
  component: EmpTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpTableRoutingModule { }
