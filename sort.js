const age = [5, 12, 40, 20, 22];

console.log(age.sort(function(a, b){
    return a-b;                         //[5, 12, 20, 22, 40]
}));

console.log(age.sort(function(a, b){
    return b-a;                         //[40, 22, 20, 12, 5]
}));

const name = ['shubham', 'kunal', 'rahul', 'nikhil', 'Ankush', 'chulbul']

console.log(name.sort());               //["Ankush", "chulbul", "kunal", "nikhil", "rahul", "shubham"]
