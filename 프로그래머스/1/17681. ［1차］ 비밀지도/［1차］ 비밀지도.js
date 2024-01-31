function solution(n, arr1, arr2) {
    var answer = [];
    
    // arr1, arr2를 2진수로 변환
    let A = arr1.map((num) => num.toString(2).padStart(n, 0));
    let B = arr2.map((num) => num.toString(2).padStart(n, 0));
    let sumArr = [];
    
    for(let i = 0; i < n; i++) {
        sumArr.push(String(+A[i] + +B[i]).padStart(n, 0));
        // console.log('sumArr', sumArr)
    }
    
    // arr1과 arr2를 겹쳐서 둘 다 0이면 공백, 둘 중 하나라도 1이면 # 출력
    for(let num of sumArr) {
        answer.push(
            num.split("").map((item) => (item === "0") ? (item = " ") : (item = "#")).join("")
        )
    }

    return answer;
}