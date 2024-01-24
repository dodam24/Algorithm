function solution(numbers, hand) {
    var answer = '';
    let leftThumb = 10, rightThumb = 12;
    
    for(let i=0; i < numbers.length; i++) {
        if(numbers[i] % 3 === 1) {
            // 1, 4, 7 버튼
            answer += 'L';
            leftThumb = numbers[i];
        }
        else if(numbers[i] % 3 === 0 && numbers[i] !== 0) {
            // 3, 6, 9 버튼
            answer += 'R';
            rightThumb = numbers[i];
        }
        else {
            // 2, 5, 8, 0 버튼
            if(numbers[i] === 0) numbers[i] = 11;
            
            // 현재 손가락의 위치와 눌러야하는 버튼 사이의 거리
            let tmpL = Math.abs(numbers[i] - leftThumb);
            let tmpR = Math.abs(numbers[i] - rightThumb);
            
            tmpL = Math.floor(tmpL / 3) + Math.floor(tmpL % 3);
            tmpR = Math.floor(tmpR / 3) + Math.floor(tmpR % 3);
            
            // 두 엄지손가락의 거리가 같은 경우
            if(tmpL === tmpR) {
                if(hand === 'right') {
                    answer += 'R';
                    rightThumb = numbers[i];
                } else {
                    answer += 'L';
                    leftThumb = numbers[i];
                }
            }
            else if(tmpL < tmpR) {
                answer += 'L';
                leftThumb = numbers[i];
            } else {
                answer += 'R';
                rightThumb = numbers[i];
            }
        }
    }
    return answer;
}