function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}}`;
}
console.log(describeCountry("Ukraine", 41, "Kyiv"));
console.log(describeCountry("Some other contry", 20, "Capital"));

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(percentageOfWorld1(20));
console.log(percentageOfWorld1(41));
console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld2(20));
console.log(percentageOfWorld2(41));
console.log(percentageOfWorld2(1441));

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));

function describePopulation(country, population) {
  return `${country} has ${population} million people, which ${percentageOfWorld3(
    population
  )} of the world`;
}
console.log(describePopulation("China", 1441));

const populations = [20, 41, 1441];
console.log(populations.length === 3);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld3(populations[2]),
];
console.log(percentages);

const neighbours = ["Poland", "Russia", "Belarus"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not central europe country :D");
}
neighbours[1] = "Moldova";
console.log(neighbours);

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  population: 41_000_000_000,
  neighbours: ["Poland", "Russia", "Belarus"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} people, ${this.neighbours.length} neightbours countries and a capital called ${this.capital} `
    );
  },
};
console.log(myCountry.capital);
console.log(myCountry["capital"]);

console.log(
  `${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbours.length} neightbours countries and a capital called ${myCountry.capital} `
);
myCountry.population += 2_000_000_000;
console.log(myCountry.population);

myCountry["population"] -= 2_000_000_000;
console.log(myCountry["population"]);

myCountry.describe();

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.92,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!"`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher thatn ${
      mark.fullName
    }'s (${mark.calcBMI()})!`
  );
}

const percentages1 = [];
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

for (let i = 0; i < populations.length; i++) {
  percentages1.push(percentageOfWorld1(populations[i]));
}
console.log(percentages1);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

let i = 0;
while (listOfNeighbours.length > i) {
  let j = 0;
  while (listOfNeighbours[i].length > j) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    j++;
  }
  i++;
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(tips);
