export default class GameView{
    constructor(){
        console.log("init game");
    }
    updateboard(game)
    {
        console.log("This is a game board inside gameview");
        console.log(game.board);
        for(let i=0;i<game.board.length;i++)
        {
            console.log(game.board[i])
        }
    }
}
