var player = 0;
var player_0 = [];
var player_1 = [];
var score_0 = 0;
var score_1 = 0;

function get_id(ret_id) {
  var btn = document.getElementById(ret_id);
  if (player == 0) {
    player_0.push(ret_id);
    btn.style.background = "red";
    btn.innerHTML = ret_id;
    btn.style.color = "white";
    btn.style.fontSize = "20px";
    player = 1;
  } else {
    player_1.push(ret_id);
    btn.style.background = "blue";
    btn.innerHTML = ret_id;
    btn.style.color = "white";
    btn.style.fontSize = "20px";
    player = 0;
  }
  btn.disabled = true;
  check_winner();
}
// This function is used to check the winner of the game
// It checks if any player has a winning combination of moves
// The winning combinations are defined in the low array
// 1A 1B 1C
// 2A 2B 2C
// 3A 3B 3C

function check_winner() {
  var low = [
    ["1A", "1B", "1C"],
    ["2A", "2B", "2C"],
    ["3A", "3B", "3C"],
    ["1A", "2A", "3A"],
    ["1B", "2B", "3B"],
    ["1C", "2C", "3C"],
    ["1A", "2B", "3C"],
    ["1C", "2B", "3A"],
  ];
  for (var i = 0; i < low.length; i++) {
    var check_0 = low[i].every((val) => player_0.includes(val));
    var check_1 = low[i].every((val) => player_1.includes(val));
    if (check_0) {
      alert("Player 1 wins!");
      score_0++;
      reset_game();
      return;
    } else if (check_1) {
      alert("Player 2 wins!");
      score_1++;
      reset_game();
      return;
    } else if (player_0.length + player_1.length == 9) {
      alert("It's a draw!");
      reset_game();
      return;
    }
  }
}

function reset_game() {
  player_0 = [];
  player_1 = [];
  player = 0;
  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      var btn_id = i + String.fromCharCode(64 + j);
      var btn = document.getElementById(btn_id);
      btn.style.background = "white";
      btn.innerHTML = "";
      btn.disabled = false;
    }
  }
}
