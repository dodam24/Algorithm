class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index) {    // 해당되는 인덱스의 값을 꺼냄
        if (index === this.arr.length - 1) {    // 인덱스가 마지막 인덱스라면
            return this.arr.pop();              // 일반 pop 메서드와 동일한 기능을 수행
        }

        // 그렇지 않으면 (= 인덱스가 마지막 인덱스가 아닐 경우)
        let result = this.arr.splice(index, 1);     // splice(): 인덱스에 해당하는 배열 요소 1개 삭제
        return result;
    }

    empty() {
        if (this.arr.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    top() {     // 가장 나중에 들어온 값
        return this.arr[this.arr.length - 1];
    }
    
    bottom() {  // 가장 처음에 들어온 값
        return this.arr[0];
    }

}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);
let popValue = s.pop(2);

console.log(s); // [10, 20, 30, 100, 200, 300]
// console.log(s.arr[0]);  // 10
console.log(popValue);  // [10, 20, 100, 200, 300]
console.log(s.top())    // 300
console.log(s.bottom())     // 10