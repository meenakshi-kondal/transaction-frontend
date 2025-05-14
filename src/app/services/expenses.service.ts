import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EXPENSE, EXPENSE_LIST } from '../interfaces/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  apiUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  addExpense(data: EXPENSE): Observable<EXPENSE> {
    return this.http.post<EXPENSE>(`${this.apiUrl}add-expense`, data)
  }

  getExpense(): Observable<EXPENSE_LIST> {
    return this.http.get<EXPENSE_LIST>(`${this.apiUrl}get-expense`)
  }
}
