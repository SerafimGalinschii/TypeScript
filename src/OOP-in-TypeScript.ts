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

  get balace() {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid Value");
    this._balance = value;
  }
}

let account = new Account(1, "Serafim", 0);
account.deposit(200);
console.log(account.balace);
account.balance = 10;

class Seatassignment {
  //A1, A2. ...
  //Mosh, Serafim, ...
  //Index signature property
  [seatNumber: string]: string;
}

let seats = new Seatassignment();
seats.A1 = "Mosh";
seats.A2 = "Serafim";

class Ride {
  private static _activeRides: number = 0; //because of 'static' the property belongs to the class not to the object

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
