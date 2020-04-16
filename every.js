const isBelow60 = (currentValue) => currentValue < 60;
const isAbove60 = (currentValue1) => currentValue1 > 60;

const age = [25, 8 ,41 , 10, 15, 22];

console.log(age.every(isBelow60));          //true
console.log(age.every(isAbove60));          //false
