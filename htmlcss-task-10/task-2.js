// Task 2

var term = {
  Canada: 10,
  Germany: 13,
  Spain: 22
};

function maxTerm(term) {
  var termArr = Object.values(term);
  return Math.max.apply(null, termArr);
}

maxTerm(term);
