let car = {
  make: "Toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in year ${this.year}`;
  },
};
console.log(car.start());
Array.prototype.hitesh = function () {
  return `custom ${this}`;
};
myArray = [1, 2, 3];
console.log(myArray.hitesh());
mynewArray = [1, 2, 3, 4, 5];
console.log(mynewArray.hitesh());

//INHERITANCE

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

//ENCAPSULATION

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount();
console.log(account.getBalance());

//ABSTRACTION

class coffeeMachine {
  start() {
    return `starting the machine...`;
  }
  brewCoffee() {
    return "Brewing coffee";
  }
  pressStartbutton() {
    let start = this.start();
    let brew = this.brewCoffee();
    return `${start}+${brew}`;
  }
}

let myMachine = new coffeeMachine();
console.log(myMachine.pressStartbutton());

// POLYMORPHISM

class Bird {
  constructor(name) {
    this.name = name;
  }
  fly() {
    return `${this.name} can fly`;
  }
}
class flightlessBird extends Bird {
  fly() {
    return `${this.name} can't fly`;
  }
}
let sparrow = new Bird("Sparrow");
let penguine = new flightlessBird("Penguine");
let ostrich = new flightlessBird("Ostrich");
console.log(sparrow.fly());
console.log(penguine.fly());
console.log(ostrich.fly());

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return "Access Denied";
  }
  set salary(value) {
    if (value > 0) {
      this.#salary = value;
    }
  }
}
let em1 = new Employee("Rahul", 90000);
console.log(em1.salary);
