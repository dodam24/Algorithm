// function solution(str1, str2) {
//     return str1.includes(str2) ? 1 : 2;
// }

function solution(str1, str2) {
    
    for(let str1Idx = 0; str1Idx < str1.length; str1Idx++) {
        const str1Item = str1[str1Idx];
        let isAllEqual = true;
        
        for(let str2Idx = 0; str2Idx < str2.length; str2Idx++) {
            if(str1[str1Idx+str2Idx] !== str2[str2Idx]) {
                isAllEqual = false;
                str1Idx = str1Idx + str2Idx;
                break;
            }
        }
        if(isAllEqual) {
            return 1;
        }
    }
    return 2;
}
