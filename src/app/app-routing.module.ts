import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailComponent } from './pages/emp-detail/emp-detail.component';
import { EmpTableComponent } from './pages/emp-table/emp-table.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: EmpTableComponent 
  },
  {
    path: 'viewdetail',
    component: EmpDetailComponent
    // loadChildren: () => import('./pages/emp-detail/emp-detail.module').then(m=> m.)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
