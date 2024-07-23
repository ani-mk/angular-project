import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { EmpTableRoutingModule } from './emp-table-routing.module';
import { EmpTableComponent } from './emp-table.component'; 
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [EmpTableComponent,
    AppComponent],
  imports: [
    CommonModule,
    EmpTableRoutingModule,
    AppModule
  ],
  bootstrap: [EmpTableComponent]
})
export class EmpTableModule { }
