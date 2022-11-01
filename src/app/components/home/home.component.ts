import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetSalaryService } from '../../services/get-salary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  salary = new FormControl();
  constructor(private getSalaryService: GetSalaryService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.salary);
  }

  putSalary() {

    const salary = this.salary.value;
    this.getSalaryService.putSalary(salary);
    console.log(this.salary.value);

    if (this.salary.value !== 0 || this.salary.value !== null) {
      this.router.navigate(['/calculate'])
    }
  }
}
