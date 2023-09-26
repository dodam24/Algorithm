// 배열 0 옮기기 (move zeroes)
// ex1. Input: nums = [0, 1, 0, 3, 12]
//      Output: [1, 3, 12, 0, 0]
// ex2. Input: nums = [0]
//      Output: [0]

var moveZeroes = function(nums) {

    let j = 0

    for (let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        // swap
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp

        j++
      }
    }
};