import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent {
@Input() empName : string ="";
@Input() empAge : number = 0;
@Input() empRegnumber: number = 0;

public employees: Array<any> = [];

  add(){
    let empDetails = {
      empName: this.empName,
      empAge: this.empAge,
      empRegnumber: this.empRegnumber
    }  
    this.employees.push(empDetails);  
    this.clear();
  }

  clear(){
    this.empName = "";
    this.empRegnumber = 0;
    this.empAge = 0;
  }

}
