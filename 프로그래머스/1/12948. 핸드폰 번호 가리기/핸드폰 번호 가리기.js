function solution(phone_number) {
    var answer = '';
    // return phone_number.slice(0, -4).replace(/[0-9]/g, '*') + phone_number.slice(-4);
    
    let front_num = phone_number.substring(0, phone_number.length - 4);
    let back_num = phone_number.substr(-4, 4);
    
    answer = front_num.replace(/[0-9]/g, '*') + back_num;
    
    return answer;
}