// 가장 긴 공통 접두사(Longest Common Prefix)

// ex1. input: strs = {"flower", "flow", "flight"}
//      output: "fl"
// ex2. input: strs = {"dog", "racecar", "car"}
//      output: ""

var longestCommonPrefix = function(strs) {
  let prefix = "";  // 결과로 반환할 LCP를 저장하는 변수

  if(strs == null || strs.length === 0) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if(strs[j][i] !== char) { // 현재 인덱스에 위치한 문자가 다른 문자열과 다르면
        return prefix;  // 현재까지의 prefix를 반환하고 종료
      }
    }
    // build prefix
    // 모든 문자열이 현재 인덱스에 위치한 문자와 같은 경우
    prefix = prefix + char;
  }
  return prefix;
}