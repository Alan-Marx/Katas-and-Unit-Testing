// Find five unique ways of implementing a binary search on a sorted array

const sortedArray = desiredLength => {
  const sortedArray = [];
  for(let i = 1; i <= desiredLength; i++) {
    sortedArray.push(i);
  }
  return sortedArray;
}

const firstChop = (sortedArray, target) => {
  console.log("The array is: " + sortedArray);

  if (!sortedArray.length) return false;

  const nextSearch = sortedArray[Math.round(sortedArray.length / 2) - 1];
  
  if (nextSearch === target) {
    return true;
  } else {
    const shortenedArray = nextSearch < target 
      ? sortedArray.slice(Math.ceil(sortedArray.length / 2)) 
      : sortedArray.slice(0, Math.ceil(sortedArray.length / 2) - 1);
    console.log("Shortened Array is: " + shortenedArray);

    return firstChop(shortenedArray, target);
  }
}

console.log(firstChop(sortedArray(1003), 456));
