const expect = require('chai').expect;
const { queenThreat } = require('../queenThreat');

describe('Queen Threat Function', () => {
  it('should return true if two queens on a chessboard are in a position to attack each other vertically', () => {
    expect(queenThreat([0, 3], [3, 3])).to.be.true;
  });

  it('should return true if two queens on a chessboard are in a position to attack each other horizontally', () => {
    expect(queenThreat([2, 1], [2, 5])).to.be.true;
  }); 

  it('should return true if two queens on a chessboard are in a position to attack each other diagonally', () => {
    expect(queenThreat([0, 5], [5, 0])).to.be.true;
  });

  it('should return false if two queens on a chessboard are not in a position to attack each other', () => {
    expect(queenThreat([4, 1], [5, 4])).to.be.false;
  });
});