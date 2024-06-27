"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const max = new Person("Max", 1971);
console.log(max);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
max.calcAge();
console.log(max.__proto__);
Person.prototype.species = "Homo Sapiens";
console.log(max);

console.log(max.__proto__.__proto__);

const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function (val) {
  this.speed += val;
  console.log(`The speed was increased and now ${this.speed}`);
  return this;
};
Car.prototype.brake = function (val) {
  this.speed -= val;
  console.log(`The speed was decreased and now ${this.speed}`);
  return this;
};
const car1 = new Car(120, "BMW");
const car2 = new Car(95, "Mercedes");

car1.accelerate();
car1.brake();

class PersonCl {
  constructor(fullName, birthYear) {
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}
const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function () {
  console.log("Hi");
};
jessica.greet();

const account = {
  owner: "max",
  movements: [200, 259, 583],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;

class CarV2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const myCar = new CarV2("BMV", 90);
console.log(myCar.speedUs);
myCar.speedUS = 90;
console.log(myCar.speed);

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();

const EV = function (make, speed, battery) {
  Car.call(this, speed, make);
  this.battery = battery;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (charge) {
  this.battery += charge;
  console.log(`Battery charged to ${this.battery}`);
};
EV.prototype.accelerate = function (speed) {
  this.battery -= 1;
  this.speed += 20;
  console.log(`${this.speed} ${this.battery}`);
};
const bike = new EV("BMW", 50, 50);
console.log(bike);
bike.accelerate();
bike.chargeBattery(15);

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}
const martha = new StudentCl("Martha", 2000, "CS");

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);

class Account {
  //Public field
  locale = navigator.language;
  //Private fields
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening the account ${this.owner}`);
  }
  getMovements() {
    return thisl.#movements;
  }
  deposite(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }

  requestLoad(val) {
    this.deposite(val);
    console.log("Loan approved");
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposite(100);
acc1.withdraw(200);
acc1.requestLoad(100);
acc1.getMovements;
console.log(acc1);

class EVCl extends Car {
  #battery;
  constructor(make, speed, battery) {
    super(speed, make);
    this.#battery = battery;
  }
}
const ev1 = new EVCl("bmw", 20, 59);
