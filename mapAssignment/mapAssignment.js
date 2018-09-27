var words = ["ground", "control", "to", "major", "tom"];

function map(words, func) {
  var newArr = [];
  for (var index of words) {
    newArr.push(func(index));
  }
  console.log(newArr);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

//[6, 7, 2, 5, 3]

//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]