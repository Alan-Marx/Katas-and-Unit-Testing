const repeat1Num = array => {
  let outputString = '';
  if (array[1] > 0) {
    for (let i = 1; i <= array[1]; i++) {
      outputString += array[0];
    }
  }
  return outputString;
};

const repeatNumbers = arrays => {
  let finalString = '';
  if (arrays.length > 1) {
    for (let pair of arrays) {
      finalString += repeat1Num(pair);
      let nextIndex = arrays.indexOf(pair) + 1;
      if (pair !== arrays[arrays.length - 1] && arrays[nextIndex][1] !== 0) {
        finalString += ', ';
      }
    }
  } else {
    let oneArray = arrays[0];
    finalString += repeat1Num(oneArray);
  }
  return finalString;
};

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 0], [92, 4]]));


