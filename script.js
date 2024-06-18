var player = 1;
var checkerOne = [];
var checkerTwo = [];
function appendSign(el, name) {
  if (player == 1) {
    document.getElementById(el).innerHTML = "O";
    checkerOne.push(name);

    console.log("Checker one " + checkerOne);
    // for (let i = 0; i <= checkerOne.length; i++) {

    // }
    if (checkerOne == "a1") {
    }
    player = 2;
  } else {
    checkerTwo.push(name);
    console.log("Checker two " + checkerTwo);
    document.getElementById(el).innerHTML = "X";
    player = 1;
  }
}
