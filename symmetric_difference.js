function sym(...args) {
  const recursion = (arr) => {
    var arr1 = arr[0];
    var arr2 = (arr.length > 2) ? recursion(arr.slice(1)) : arr[1];
    var out = [];

    arr1.forEach( (item) => {
      if (!arr2.includes(item) && !out.includes(item)) out.push(item);
    });

    arr2.forEach( (item) => {
      if (!arr1.includes(item) && !out.includes(item)) out.push(item);
    });

    return out;
  }

  return recursion(args);
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // [1, 4, 5]

//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) //[1, 2, 4, 5, 6, 7, 8, 9]
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) //[2, 3, 4, 6, 7]
