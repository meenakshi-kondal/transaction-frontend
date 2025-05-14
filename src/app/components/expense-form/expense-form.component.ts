import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-expense-form',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;
  constructor(private fb: FormBuilder, private service: ExpensesService) {
    this.expenseForm = this.fb.group({
      description: ['', Validators.required],
      type: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)
      ]],
    })
  }

  public submit() {
    const form = this.expenseForm.value;
    const payload: any = {
      description: form.description,
    }
    if (form.type === 'credit') payload.credit = form.amount;
    if (form.type === 'debit') payload.debit = form.amount

    this.service.addExpense(payload).subscribe({
      next: () => {
        alert('Expense Added');
        this.resetForm();
      },
      error: err => alert('Form is not valid')
    })
  }

  public resetForm() {
    this.expenseForm.reset({
      description: '',
      amount: null,
      type: ''

    })
  }
}
