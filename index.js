/*

This is a basic Budget app for me to learn how to create an application on my own.

The basics of a budget is to take revenues and expenses over time.

A Basic budget should be able to perform the following:

Track actions to the budget:
-Income: Positive additions to the budget
-Expenses: Negative additions to the budget

Each budgetary item should have a minimum of:
-Amount, Transaction Type (Income/Expense), Date, Description

The Budget functionality should include:
-Interface for user to enter expenses and income
-Database:
  -Balance
  -Transaction list
-Visual Representation of Financial position

*/

import { Transaction } from "./src/transaction";
import { Budget } from "./src/budget";
import moment from 'moment';
moment().format();

let myBudget = new Budget(100);
new Transaction(100, "+", "9/14/21", "no", "Payday");

console.log(Transaction.history());
console.log(Budget.transactions);