"use strict";

const repeatNumbers = arrays => {
  let finalString = '';

  for (let pair of arrays) {
    for (let i = 0; i < pair[1]; i++) {
      finalString += pair[0];
    }
    const pairIndex = arrays.indexOf(pair);
    if (pairIndex !== arrays.length - 1 && arrays[pairIndex + 1][1] !== 0) {
      finalString += ', ';
    }
  }
  return finalString;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 0], [92, 4]]));




