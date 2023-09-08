const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 1. Set() - 중복을 허용 X
// const mySet = new Set(); // Set 객체 생성
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);

// console.log(mySet);

const uniqueNums = [...new Set(nums)];  // Set 오브젝트를 리턴 후, 스프레드(...)를 활용하여 Array로 변환
console.log(uniqueNums);



// 2. indexOf() - 주어진 요소의 첫 번째 인덱스를 리턴
// console.log(nums.indexOf(6));

const uniqueNums = nums.filter((item, position) => {    // filter함수: 배열의 각 요소를 순회하며 callback 함수를 실행, 조건에 맞는 요소만을 갖는 배열을 반환
    return nums.indexOf(item) === position;
});

console.log(uniqueNums);



// 3. caching / frequency map - 배열을 돌면서(Loop) 각 요소의 출현빈도를 array, object에 저장 후, 해당 정보를 바탕으로 중복 검사 수행

function uniqueNums(arr) {
    const uniqueElements = {}
    const result = []
    for (let element of arr) {
        if(!uniqueElements[element]) {
            result.push(element);
        }
        uniqueElements[element] = element;
    }
    return result;
}