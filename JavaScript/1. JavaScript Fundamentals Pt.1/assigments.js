const country = "Ukraine";
const continent = "Europe";
let population = 41_000_000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "ukrainian";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
console.log(++population);
console.log(population > 6_000_000);
console.log(population <= 33_000_000);
console.log(
  country +
    " is in " +
    continent +
    " and it's " +
    population +
    " people speaks " +
    language
);
console.log(
  `${country} is in ${continent} and it's population ${population} people speaks ${language} language`
);

if (population > 33_000_000) {
  console.log(
    `${country}'s population is ${population - 22_000_000} above average`
  );
} else {
  console.log(
    `${country}'s population is ${22_000_000 - population} below average`
  );
}

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// const numNeighbours = Number(
//   prompt(`How many neighbour countries does your country has?`)
// );
// if (numNeighbours === 1) console.log(`Only 1 border`);
// else if (numNeighbours > 1) console.log(`More than 1 border`);
// else console.log(`No border`);
if (language === "english" && population < 50_000_000 && !isIsland)
  console.log(`You should live in ${country}`);
else console.log(`${country} dose not meet your criteria`);

const day = `monday`;
if (day === `monday`) {
  console.log(`plans for monday`);
} else if (day === `tuesday`) {
  console.log(`plans for tuesday`);
} else if (day === `wednesday`) {
  console.log(`plans for wednesday`);
} else if (day === `thurday`) {
  console.log(`plans for thurday`);
} else if (day === `friday`) {
  console.log(`plans for friday`);
} else if (day === `saturday`) {
  console.log(`plans for saturday`);
} else if (day === `sunday`) {
  console.log(`plans for sunday`);
}

switch (day) {
  case `monday`:
    console.log(`plans for monday`);
    break;
  case `tuesday`:
    console.log(`plans for tuesday`);
    break;
  case `wendnesday`:
    console.log(`plans for wednseday`);
    break;
  case `thurday`:
    console.log(`plans for thurday`);
    break;
  case `friday`:
    console.log(`plans for friday`);
    break;
  case `saturday`:
    console.log(`plans for saturday`);
    break;
  case `sunday`:
    console.log(`plans for sunday`);
    break;
}

switch (language) {
  case `chinese`:
  case `mandarin`:
    console.log(`MOST number of native speaker`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`4th place`);
    break;
  default:
    console.log("Great language too! :D");
}

age = 18;
console.log(age >= 18 ? `I like to drink wine` : `I like to drink water`);

console.log(
  `The ${country} population is ${
    population > 33_000_000 ? "above avarage" : "below avarage"
  }`
);
