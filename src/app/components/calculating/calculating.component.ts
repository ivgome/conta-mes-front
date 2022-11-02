import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Waste } from 'src/app/interfaces/waste';
import { GetSalaryService } from 'src/app/services/get-salary.service';
import { PutWasteService } from '../../services/put-waste.service';

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
  light: number = 80
  
  wasteForm = new FormGroup({
    concept: new FormControl(null),
    quantity: new FormControl(null),
    date: new FormControl(null)
   })

  constructor(private getSalaryService: GetSalaryService, private putWasteService:PutWasteService) {
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
