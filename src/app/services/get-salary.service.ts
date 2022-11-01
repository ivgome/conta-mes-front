import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetSalaryService {
  salary: number = 0;

  constructor() {}

  public putSalary(salary: number) {
    this.salary = salary;
  }

  public getSalary() {
    return this.salary;
  }
}
