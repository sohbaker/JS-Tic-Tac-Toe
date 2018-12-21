import { GameController } from '../src/game_controller';
import { Board } from '../src/board';
import { Game } from '../src/game';

describe('GameController', () => {

  // let gameController;
  // beforeEach(() => {
  //   gameController = new GameController;
  // });

  // it('creates an instance of the Game class when initialized', () => {
  //   expect(typeof gameController.game === 'object').toEqual(true);
  // });
  //
  // it('allows a player to make a move', () => {
  //   gameController.takeTurn(3)
  //   expect(gameController.game.grid).toEqual([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
  // });
  //
  // it('allows a second player to make a move', () => {
  //   gameController.takeTurn(3)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(5)
  //   expect(gameController.game.grid).toEqual([1, 2, 'x', 4, 'o', 6, 7, 8, 9]);
  // });

  it('returns "Tie" when neither player has won after 9 moves', () => {
    const board = new Board(['o', 'x', 'x', 'x', 'o', 'o', 'o', 'x', 'x'])
    const game = new Game(board)
    const gameController = new GameController(game)
    // gameController.takeTurn(3)
    // gameController.togglePlayer()
    // gameController.takeTurn(5)
    // gameController.togglePlayer()
    // gameController.takeTurn(2)
    // gameController.togglePlayer()
    // gameController.takeTurn(1)
    // gameController.togglePlayer()
    // gameController.takeTurn(8)
    // gameController.togglePlayer()
    // gameController.takeTurn(7)
    // gameController.togglePlayer()
    // gameController.takeTurn(4)
    // gameController.togglePlayer()
    // gameController.takeTurn(6)
    // gameController.togglePlayer()
    // gameController.takeTurn(9)
    console.log(gameController.canContinuePlaying())
    console.log(gameController.game.currentPlayer)
    expect(gameController.isATieOrWon()).toEqual("Tie"); // make changes to Board class
  });

  // it('returns "Win" when a player has won', () => {
  //   gameController.takeTurn(5)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(4)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(2)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(1)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(8)
  //   expect(gameController.isATieOrWon()).toEqual("Win");
  // });
  //
  // it('checks if game can continue and returns false due to a tie', () => {
  //   gameController.takeTurn(3)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(5)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(2)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(1)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(8)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(7)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(4)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(6)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(9)
  //   expect(gameController.canContinuePlaying()).toEqual(false);
  // });
  //
  // it('checks if game can continue and returns false because player has winning combination', () => {
  //   gameController.takeTurn(5)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(4)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(2)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(1)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(8)
  //   expect(gameController.canContinuePlaying()).toEqual(false);
  // });
  //
  // it('checks if game can continue and returns true because a player has not won, and there are less than 9 moves', () => {
  //   gameController.takeTurn(5)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(4)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(2)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(1)
  //   gameController.togglePlayer()
  //   gameController.takeTurn(9)
  //   expect(gameController.canContinuePlaying()).toEqual(true);
  // });

})