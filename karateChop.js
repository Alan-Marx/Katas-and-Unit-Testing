// Find five unique ways of implementing a binary search on a sorted array

const sortedArray = desiredLength => {
  const sortedArray = [];
  for(let i = 1; i <= desiredLength; i++) {
    sortedArray.push(i);
  }
  return sortedArray;
}

const firstChop = (sortedArray, target) => {
  if (!sortedArray.length) return false;
  const nextIndex = Math.round(sortedArray.length / 2) - 1;
  if (sortedArray[nextIndex] === target) {
    return true;
  } else {
    const shortenedArray = sortedArray[nextIndex] < target 
      ? sortedArray.slice(nextIndex + 1) 
      : sortedArray.slice(0, nextIndex);
    return firstChop(shortenedArray, target);
  }
}

console.log(firstChop(sortedArray(100), 10));
