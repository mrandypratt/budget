import { Budget } from "./budget.js";

export class Transaction {
  constructor(amount, type, date, recurring, description) {
    this.amount = amount;
    this.type = type;
    this.date = date;
    this.recurring = recurring;
    this.description = description;
    this.id = Budget.transactions.length;
    Budget.transactions.push(this);
  }
}