class Account {
  //   readonly id: number;
  //   owner: string;
  //   private balance: number;
  nickname?: string;

  constructor(
    public readonly id: number, // Here e replace the initialization of pramaters and the declaration types fro lines 2-4 and 12-14
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  getBalace() {
    return this._balance;
  }
}

let account = new Account(1, "Serafim", 0);
account.deposit(200);
console.log(account.getBalace());
