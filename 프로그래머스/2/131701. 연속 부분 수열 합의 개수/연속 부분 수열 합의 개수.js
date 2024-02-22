function solution(elements) {
    const set = new Set();
    const len = elements.length;
    
    for(let i = 0; i < len; i++) {
        let sum = 0;
        for(let j = i; j < i + len; j++) {
            sum += elements[j % len];
            set.add(sum)
        }
    }
    return set.size;
}