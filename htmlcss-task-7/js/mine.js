function on_menu() {
  document.getElementById('sidebar').style.display='block';
}

function off_menu() {
  document.getElementById('sidebar').style.display='none';
}

function testInput() {
  var btnSubmit = document.getElementById('btn'); 
  btnSubmit.setAttribute('disabled', 'disabled');
  document.getElementById('btn').style.animation='btnInvalid 3s';
  document.getElementById('btn').style.background='#b4b9bb';
}
