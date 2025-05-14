import { Component } from '@angular/core';
import { EXPENSE_LIST } from '../../interfaces/expenses';
import { ExpensesService } from '../../services/expenses.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [RouterModule,NgFor],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent {
  expenseList:any=[];
  constructor(private service: ExpensesService) { }

  ngOnInit() {
    this.loadExpenses();
  }

  private loadExpenses() {
    this.service.getExpense().subscribe(result => {
      console.log(result?.data)
      this.expenseList=result.data
  });
  }

  public getDate(date:any){
    return new Date(date).toDateString();
  }
}
