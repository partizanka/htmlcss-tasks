// Task 3

// var arr = ['srting', {}, null, true];
var arr = ['srting', {}, null, 4, 10, true, 2];

function arithMul() {

function filterArr(arr) {
  return (typeof arr === 'number');
} 

var positiveArr = arr.filter(filterArr);

if (positiveArr.length === 0) {
  alert('Error!');
}

var total = positiveArr.reduce(function(a, b) {
  return a * b;
});

console.log(total);
}

arithMul();
