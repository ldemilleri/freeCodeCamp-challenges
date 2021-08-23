function updateInventory(arr1, arr2) {

  var idx;
  var arrInventory = []; 
  var arrDelivery = []; 

  // Increase the number of stock
  arr1.forEach(function(item1) {
    arr2.forEach(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0];
      }
    });
  });

  // Copy names from arr2 into delivery
  arr2.forEach(function(item) {
    arrDelivery.push(item[1]);
  });

  // Copy names from arr1 into inventory
  arr1.forEach(function(item) {
    arrInventory.push(item[1]);
  });

  // Add new items to inventory
  arrDelivery.forEach(function(item) {
    if (arrInventory.indexOf(item) === -1) {
      idx = arrDelivery.indexOf(item);
      arr1.push(arr2[idx]);
    }
  });

  // Sort the array alphabetically
  arr1.sort(function(currItem, nextItem) {
    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
