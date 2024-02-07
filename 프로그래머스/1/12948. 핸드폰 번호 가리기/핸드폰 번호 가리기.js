function solution(phone_number) {
    let front_num = phone_number.substring(0, phone_number.length - 4);
    let back_num = phone_number.substr(-4, 4);
    
    return front_num.replace(/[0-9]/g, '*') + back_num;
    
    // return phone_number.slice(0, -4).replace(/[0-9]/g, '*') + phone_number.slice(-4);
}
