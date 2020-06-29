"use strict";

// The following function detects whether two queens on a chessboard can attack each other.
// it is assumed that there are only two queens on the board. 

const queenThreat = (queen1, queen2) => {
  
  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]) {
    return true;
  } 
  const topQueen = queen1[0] < queen2[0] ? queen1 : queen2;
  const bottomQueen = queen1[0] < queen2[0] ? queen2 : queen1;
  const rowDistance = bottomQueen[0] - topQueen[0];
  
  if (bottomQueen[1] === topQueen[1] - rowDistance || bottomQueen[1] === topQueen[1] + rowDistance) {
    return true;
  }
  return false;
}

module.exports = { queenThreat };

// console.log(queenThreat([0, 5], [5, 0]));
// console.log(queenThreat([0, 0], [5, 7]));
// console.log(queenThreat([0, 0], [0, 7]));
// console.log(queenThreat([4, 3], [1, 3]));
// console.log(queenThreat([1, 0], [4, 3]));