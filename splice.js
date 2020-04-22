const number = ['One', 'Two', 'Four', 'Five'];

number.splice(2, 0, 'THREE');
console.log(number);                            //["One", "Two", "THREE", "Four", "Five"]

number.splice(3, 1);
console.log(number);                            //["One", "Two", "THREE", "Five"]

number.splice(0, 2, 'ONE', 'TWO');
console.log(number);                            //["ONE", "TWO", "THREE", "Five"]
