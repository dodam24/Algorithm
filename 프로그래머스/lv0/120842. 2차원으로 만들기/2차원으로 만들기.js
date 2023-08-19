function solution(num_list, n) {
    const result = [];
    let tempArray = [];
    for(let i = 0; i < num_list.length; i++) {
        const item = num_list[i];
        tempArray.push(item);
        if(tempArray.length === n) {
            result.push(tempArray);
            tempArray = [];
        }
        
    }
    return result;
}