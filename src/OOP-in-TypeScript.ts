class Account {
  readonly id: number;
  owner: string;
  private balance: number;
  nickname?: string;
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }

  getBalace() {
    return this.balance;
  }
}

let account = new Account(1, "Serafim", 0);
account.deposit(200);
console.log(account.getBalace());
