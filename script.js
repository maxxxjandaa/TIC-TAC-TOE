var player = 1;
function appendSign(el) {
  if (player == 1) {
    document.getElementById(el).innerHTML = "O";
    player = 2;
    document.getElementById(el).disabled = true;
  } else {
    document.getElementById(el).innerHTML = "X";
    player = 1;
    document.getElementById(el).disabled = true;
  }
}
