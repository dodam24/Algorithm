function solution(ingredient) {
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }
    return count;
}

// slice(): 
// begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환 (원본 배열 수정 X)

// splice(): 
// 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 (원본 배열 자체를 수정) - 시작 인덱스부터 몇 개를 삭제할지
