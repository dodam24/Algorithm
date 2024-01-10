// readline 모듈 불러오기
const readline = require('readline');

// 사용자 입력을 읽고 쓸 수 있는 인터페이스 생성 (rl 객체를 생성하여 입력과 출력 스트림 설정)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 사용자 입력을 저장할 배열
let input = [];

// 사용자가 엔터를 입력할 때마다 발생하는 line 이벤트 핸들러 등록
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){   // 사용자 입력이 끝났을 때 발생하는 close 이벤트에 대한 핸들러 등록
    str = input[0];
    console.log(str);
});