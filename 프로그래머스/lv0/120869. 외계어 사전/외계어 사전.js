function solution(spell, dic) {
    
    // 주어진 단어를 사전 순으로 정렬
    spell = spell.sort().join("")
    
    // dic 배열의 요소를 모두 정렬하고, 요소가 있다면 1, 없다면 2를 반환
    return dic.map(a => a.split("").sort().join("")).find(a => a === spell) !== undefined ? 1 : 2 
}