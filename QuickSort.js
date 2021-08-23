function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivot = array[0];
    // Sort elements into three piles
    let less = [];
    let eq = [];
    let great = [];
    
    for (let e of array) {
      if (e < pivot) {
        less.push(e);
      } else if (e > pivot) {
        great.push(e);
      } else {
        eq.push(e);
      }
    }
    return [...quickSort(less), ...eq, ...quickSort(great)];
  }
}
