// LoopsExercise 

// 1
for (i = 1; i <= 7; i++ ) {
    console.log(i);
}

console.log(`===============`);

// 2
for (i = 5; i <= 25; i += 4) {
    console.log(i);
}

// 3a
const wizards = [
    `Harry Potter`, 
    `Hermione Granger`, 
    `Ron Weasley`];

console.log(`===============`);
// 3b
for (main of wizards) {
    console.log(main);
}

// 4a
let harryPotterMovies = 0;

console.log(`=================`);
// 4b
while (harryPotterMovies < 8) {
    harryPotterMovies ++;
}
// 4c
console.log(harryPotterMovies);

// BONUS

// 5a
const hogwartsHouses = [
    `Gryffindor`, 
    `Hufflepuff`, 
    `Ravenclaw`, 
    `Slytherin`
];

console.log(`===============`);

// 5b
for (category of hogwartsHouses.slice(0,1)) {
    for (g of category.slice(0))
    console.log(g);
}
console.log(`==============`);
for (category of hogwartsHouses.slice(1,2)) {
    for (h of category.slice(0))
    console.log(h);
}
console.log(`==============`);
for (category of hogwartsHouses.slice(2,3)) {
    for (r of category.slice(0))
    console.log(r);
}
console.log(`==============`);
for (category of hogwartsHouses.slice(3,4)) {
    for (s of category.slice(0))
    console.log(s);
}

// 6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

// 6b

let [one, two, three, four] = quote;
while (quote == one, two, three, four) {
    
    console.log(one, two, three, four);
    break;
}

// 7
for (i=1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0){
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {console.log(i);}
}
