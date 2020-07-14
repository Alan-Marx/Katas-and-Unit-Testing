const sortAndPrune = (list) => {
  const sortedList = [list[0]];
  let operations = 0;

  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < sortedList.length; j++) {
      operations++;
      if (list[i] === sortedList[j]) break;
      if (list[i] < sortedList[j] && (!sortedList[j - 1] || list[i] > sortedList[j - 1])) {
        sortedList.splice(j, 0, list[i]);
        break;
      } else if (!sortedList[j + 1] || list[i] < sortedList[j + 1]) {
        sortedList.splice((j + 1), 0, list[i]);
        break;
      } 
    }
  }
  return { sortedList, operations };
}

console.log(sortAndPrune([3, 10, 10, 2, 2, 9, 5, -1, 7, 34]))