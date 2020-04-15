//Declaration of Array
let fruits = ['Apple', 'Orange', 'Chiku', 'Banana'];
console.log(fruits);                                //"Apple", "Orange", "Chiku", "Banana"

//Access the Array element using index
console.log(fruits[1]);                             //Orange

//Find the lenght of an Array
console.log(fruits.length);                         //4

//Access the last element of an Array
let last = fruits[fruits.length-1]
console.log(last);                                  //Banana

//Loop over an Array
for(let i=0; i< fruits.length; i++){
    let element = fruits[i];
    console.log(element);                           //Apple, Orange, Chiku, Banana, Strawberry
}

//Add the element at the end of an Array
let lastNewElement = fruits.push('Strawberry');
console.log(fruits);                                //"Apple", "Orange", "Chiku", "Banana", "Strawberry"
console.log(lastNewElement);                        //5

//Remove the last element of an Array
let removeLastElement = fruits.pop();
console.log(fruits);                                //"Apple", "Orange", "Chiku", "Banana"  
console.log(removeLastElement);                     //Strawberry

//Add the new elelment at the first position
let firstNewElement = fruits.unshift('Kiwi');
console.log(fruits);                                //"Kiwi", "Apple", "Orange", "Chiku", "Banana"
console.log(firstNewElement);                       //5

//Remove the first element of an Array
let removeFirstElement = fruits.shift();                                     
console.log(fruits);                                //"Apple", "Orange", "Chiku", "Banana"
console.log(removeFirstElement);                    //Kiwi
