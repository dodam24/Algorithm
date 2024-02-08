function solution(arr) {    
    // return arr.reduce((acc, cur) => acc + cur / arr.length, 0)
   
    const result = arr.reduce(function add(sum, curVal) {
        return sum + curVal;
    }, 0)
    
    const average = result / arr.length;
  
    return average;
}