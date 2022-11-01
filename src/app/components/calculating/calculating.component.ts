import { Component, OnInit } from '@angular/core';
import { GetSalaryService } from 'src/app/services/get-salary.service';

@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrls: ['./calculating.component.scss']
})
export class CalculatingComponent implements OnInit {
  
  salary: number = 0;

  rent: number = 765
  garage: number = 35
  water: number = 30
  internet: number = 30
  light:number = 80

  constructor(private getSalaryService: GetSalaryService) {
    this.salary = this.getSalaryService.getSalary()

  }

  ngOnInit(): void {

    this.calcTotalWaste()
    
  }

  calcTotalWaste() {
    const totalWaste = this.rent + this.garage + this.water + this.light + this.internet;
    const showTotal = this.salary - totalWaste;
    console.log(showTotal)
    return showTotal 
  }


}
