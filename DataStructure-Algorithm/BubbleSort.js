// ES5
function bubbleSort(arr) {
  for(var i = arr.length; i > 0; i--) {
    for(var j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}


// ES 2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8, 12, 88, -3]);


// 최적화 (데이터가 거의 정렬된 경우)
function bubbleSort(arr) {
  var noSwaps;
  for(var i = arr.length; i > 0; i--) {
    noSwaps = true; // 교환하지 않는 경우
    for(var j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;  // 교환해야 하는 경우
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4,5, 6, 7]);