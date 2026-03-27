function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    function formatTime(time) {
        let newTime = (Math.floor(time / 100) * 60 + (time % 100)) + 10;
        return (Math.floor(newTime / 60) * 100 + newTime % 60)
    }
    
    for (let i = 0; i < schedules.length; i++) {
        let time = formatTime(schedules[i]);
        let valid = true;
        
        for (let j = 0; j < 7; j++) {
            let dayIdx = (startday + j) % 7;
            if (dayIdx === 6 || dayIdx === 0) continue;
            
            if (timelogs[i][j] > time) {
                valid = false;
                break;
            }
        }
        if (valid) answer ++;
    }
    return answer;
}
