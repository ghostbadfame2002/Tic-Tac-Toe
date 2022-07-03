import Game from "./Game.js"
import GameView from "./Gameview.js";

let game=new Game();
let gameView=new GameView();
gameView.updateboard(game);

console.log(game.board);
console.log("My Turn is ",game.turn);
game.nextTurn();
console.log("My Turn is ",game.turn);
game.makeMove(3);
console.log(game.board);
game.nextTurn(); 
game.makeMove(8);
console.log(game.board);