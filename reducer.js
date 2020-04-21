const fun = (currentValue, addedValue) => addedValue + currentValue; 
const array = [2, 5, 4, 3]; 
let reducer = array.reduce(fun);
console.log(reducer);                                       //14

let reducerValue = array.reduce(fun, 10);
console.log(reducerValue);                                  //24
