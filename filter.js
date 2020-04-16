 const ageFilter = (name) => name.length <= 5;
 
 const group = ['shubham', 'Kunal', 'ram', 'shu', 'rishi', 'Aniket' ];

 console.log(group.filter(ageFilter));      //["Kunal", "ram", "shu", "rishi"]
