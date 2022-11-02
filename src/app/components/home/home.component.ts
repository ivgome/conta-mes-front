import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetSalaryService } from '../../services/get-salary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  salary = new FormControl();
  constructor(
    private _snackBar: MatSnackBar,
    private getSalaryService: GetSalaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.salary);
  }

  putSalary() {
    const salary = this.salary.value;
    this.getSalaryService.putSalary(salary);
    console.log(this.salary.value);

    if (this.salary.value !== 0 && this.salary.value !== null) {
      this.router.navigate(['/calculate']);
    } else{this.openSnackBar()}
 
  }
  openSnackBar() {
    this._snackBar.open('Introduce los datos antes de continuar', 'Aceptar');
  }
}
