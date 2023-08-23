function solution(my_string) {
    const answer = my_string.toLowerCase();
    const strArray = [...answer];
    return strArray.sort().join('');
}


// function solution(my_string) {
//     const answer = my_string.toLowerCase();
//     console.log("answer : ", answer); // answer : python
    
//     const strArray = [...answer];
//     console.log("strArray : ", strArray); // strArray :  [ 'p', 'y', 't', 'h', 'o', 'n' ]
    
//     const sortedArray = strArray.sort();
//     console.log("sortedArray : ", sortedArray); // sortedArray :  [ 'h', 'n', 'o', 'p', 't', 'y' ]
    
//     const joinedString = sortedArray.join('');
//     console.log("joinedString : ", joinedString); // joinedString :  hnopty
    
//     return joinedString;
// }