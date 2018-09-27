var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//Sorting by age
function ageSort(a, b){
  var nameA=a.name, nameB=b.name
  if (nameA === nameB) {
    return b.age-a.age
  } else if (nameA < nameB) {//This resorts the array
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

console.log(students.sort(ageSort));


//Expected output below --------------

/*var students = [
  { id: 4, name: "alex",     age: 30 },
  { id: 3, name: "alex",     age: 22 },
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },

];*/