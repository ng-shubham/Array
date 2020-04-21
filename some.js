const age = [5, 12, 40, 20, 22];

const findAge = (ageNumber) => ageNumber > 60;
console.log(age.some(findAge));                     //false

const belowAge = (ageNumber) => ageNumber > 18;
console.log(age.some(belowAge));                    //true
