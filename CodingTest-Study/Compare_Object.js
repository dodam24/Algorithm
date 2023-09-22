// 두 객체 비교하기

const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1
  }
}

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1
  }
}



// object(객체)는 참조형이므로 key, value값 및 순서가 같은 object를 === 으로 비교할 수 없음
// 즉, 두 객체를 직접 비교 X (ex. obj1 === obj2)
// 따라서 참조형을 원시형으로 바꾸어서 비교해주어야 함


// 1. JSON.stringify() : JavaScript에서 사용되는 내장 함수
// JavaScript 객체나 값들을 JSON 형식의 문자열로 변환하는 역할을 함

function isEqual(objA, objB) {
  let a = JSON.stringify(objA)
  let b = JSON.stringify(objB)

  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isEqual(obj1, obj2))  // true


// 2. Object, Array 함수 활용

function isEqual(objA, objB) {
  // 두 객체가 존재하고, 둘 다 객체 타입인지 확인
  const checkObjects = (objA && objB && typeof objA === 'object' && typeof objB === 'object');
  // objA의 키(속성) 개수와 objB의 키(속성) 개수가 동일한지 확인
  if(checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
    // objA 속성을 반복하면서 모든 속성이 objB와 동일한지 확인
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqual(objA[key], objB[key])
    }, true);
  } else {
    // 두 객체 중 하나라도 객체 타입이 아니거나 속성의 개수가 다른 경우, 값 비교를 수행
    return objA === objB
  }
}

console.log(isEqual(obj1, obj2))  // true