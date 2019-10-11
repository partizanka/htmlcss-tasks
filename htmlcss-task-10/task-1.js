// Task 1

var term = {
  Canada: 10,
  Germany: 13,
  Spain: 22
};

var sum = 0;
for (var key in term) {
  sum += term[key];
}

var item = Object.keys(term).length;

console.log(sum/item);
