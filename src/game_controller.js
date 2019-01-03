import { Game } from '../src/game';

export class GameController {
  constructor(game) {
    this.game = game;
  }

  togglePlayer(){
    this.game.switchPlayer()
  }

  canContinuePlaying(){
    return this.game.canContinuePlaying(this.game.currentPlayer);
  }

  isATieOrWon(){
    return this.game.isTieOrIsWon();
  }

  takeTurn(position) {
    if (this.game.board.isValidPosition(position) && this.canContinuePlaying()) {
      this.game.makeMove(this.game.currentPlayer, position);
      console.log(this.canContinuePlaying());

      if (this.canContinuePlaying()) {
        this.togglePlayer();
      }
    }
  }


}
