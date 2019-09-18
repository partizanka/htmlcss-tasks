function first_click() {
  document.getElementById('1');
  document.location.href = 'owls.html';
}

function second_click() {
  document.getElementById('elem').style.backgroundColor = '#ff0000';
}

function third_click() {
  document.getElementById('elem').style.backgroundColor = '#fff';
  document.getElementById('elem').innerHTML = '';
  document.getElementById('elem').innerHTML = '<div class="block"><p>Один</p><p>Два</p><p>Три</p></div>';
}
