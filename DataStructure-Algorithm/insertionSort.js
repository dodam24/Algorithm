function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var curVal = arr[i];
    for(var j = i-1; j >= 0 && arr[j] > curVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = curVal;
    console.log(arr)
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4])