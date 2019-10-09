// Task 2

term = {
  Canada: 10,
  Germany: 13,
  Spain: 22
};

function maxTerm(term) {
  var termArr = (Object.values(term));
  return Math.max(termArr);
}
