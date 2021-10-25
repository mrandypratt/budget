class Budget {
  constructor(balance) {
    this.balance = balance;
  }
  
  static transactions = [];
  
  updateBalance(amount) {
    this.balance = amount;
  }
}

module.export = Budget;