function solution(dots) {
    let hor = 0;
    let ver = 0;
    
    for(let i=0; i < dots.length-1; i++) {
        const [x, y] = dots[i];
        const [nx, ny] = dots[i+1];
        
        hor = Math.max(Math.abs(nx - x), hor);
        ver = Math.max(Math.abs(ny - y), ver);
    }
    
    return hor * ver;
}