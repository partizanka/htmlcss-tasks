// Task 1

term = {
  Canada: 10,
  Germany: 13,
  Spain: 22
};

var sum = 0;
for (var key in term) {
  sum += term[key];
}

alert(sum/2);
