import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent {
empName : string ="";
empAge: number = 0;
empRegnumber: number= 0;
}
