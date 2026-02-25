var playerHP = 100;
var enemeyHP = 90;
var playerStamina = 10;
var enemeyStamina = 10;
var playerMana = 5;
var enemeyMana = 0;
var moveSetId = ["q", "b", "h", "bl", "mfb", "msb"];
var moveSetCost = [1, 2, 6, 2, 0, 0];
var moveSetMana = [0, 0, 0, 0, 2, 2];
var moveSetAtk = [10, 20, 30, 0, 15, 35];
var moveSetDef = [0, 0, 0, 5, 0, 0];
var moveSetEffect = [0, 0, 1, 0, 2, 1];
var movesForTurn = [];

function move(type){
  var selectedMove = moveSetId.index(type)
  if(moveSetCost[selectedMove] <= playerStamina && moveSetMana[selectedMove] <= playerMana){
    movesForTurn.append(selectedMove);
  }
}

function nextTurn() {
  document.getElementById("testArea").innerHTML = movesForTurn.join(",");
}
