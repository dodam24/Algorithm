function solution(wallpaper) {
    const rowLen = wallpaper[0].length
    const colLen = wallpaper.length
    
    const xList = []
    const yList = []
    
    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            if (wallpaper[i][j] === "#") {
                xList.push(j)
                yList.push(i)
            }
        }
    }
    
    
    let answer = [Math.min(...yList), Math.min(...xList), Math.max(...yList)+1, Math.max(...xList)+1];
    return answer;
}