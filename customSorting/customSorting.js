var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//This is a callback function that can be passed to sort() with the updated array.
function ageSort(a, b){
  var nameA=a.name, nameB=b.name
  if (nameA === nameB) {//This sorts the array by age and modifies
    return b.age-a.age
  } else if (nameA < nameB) {//This re-sorts and re-modifies the array by name
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

console.log(students.sort(ageSort));