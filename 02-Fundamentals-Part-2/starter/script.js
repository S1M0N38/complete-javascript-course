///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/


// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) return bill * .15;
//     else return bill * .2;
// }

// console.log(calcTip(100));

// bills = [125, 555, 44];
// tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(total);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Something',
//     age: 2037 - 1991,
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(`
//  ${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}
//  and he has ${jonas.hasDriverLicense ? 'a' : 'no'} drive's license.`
// );

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     }
// }

// John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     }
// }

// if (Mark.calcBMI() > John.calcBMI()) {
//     console.log(
//         `${Mark.fullName}'s BMI (${Mark.BMI}) is higher than`,
//         `${John.fullName}'s BMI (${John.BMI})`
//     )
// } else {
//     console.log(
//         `${John.fullName}'s BMI (${John.BMI}) is higher than`,
//         `${Mark.fullName}'s BMI (${Mark.BMI})`
//     )
// }

// console.log('Lifing weights repetintion 1');

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifing weights repetintion ${rep}`);
// }

// const types = []

// for (let i = 0; i < jonasArray.length; i++) {

//     console.log(jonasArray[i], typeof jonasArray[i]);
//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
//     types.push(typeof jonasArray[i]);
// }

// const jonas = [
//     'Jonas',
//     'Something',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice;
// while (dice !== 6) {
//     dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(`You roller a ${dice}`);
// }

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const clalcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = clalcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i]);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));