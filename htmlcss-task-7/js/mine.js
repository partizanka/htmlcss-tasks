function on_menu() {
  document.getElementById('sidebar').style.display='block';
}

function off_menu() {
  document.getElementById('sidebar').style.display='none';
}

function testInput() {
  var b = document.getElementById('btn'); 
  b.setAttribute('disabled', 'disabled');
  document.getElementById('btn').style.animation='btnInvalid 3s';
  document.getElementById('btn').style.background='#b4b9bb';
}
