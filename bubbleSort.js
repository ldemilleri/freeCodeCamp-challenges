function bubbleSort(array) {

  let sorted = false;
  while(!sorted){
    sorted = true;
    for (let i = 0; i < array.length - 1; i++)
    if (array[i] > array[i+1]){
      [array[i], array[i+1]] = [array[i+1], array[i]];
      sorted = false
    }
  }
  return array;

}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
