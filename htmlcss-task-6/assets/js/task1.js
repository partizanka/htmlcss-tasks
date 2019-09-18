var name = prompt('Как тебя зовут?');

if (/\d/.test(name)) {
  alert(name.toUpperCase());
} else {
  alert(name.split('').reverse().join(''));
}
