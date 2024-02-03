function solution(today, terms, privacies) {
    today = new Date(today.replace(/[.]/g, "-"))
    
    const objectTerms = convertArrToObj(terms)
    
    return privacies.reduce((acc, curPrivacy, idx) => {
        const expiryDate = getExpDate(curPrivacy, objectTerms)
        if(isExpired(expiryDate, today)) acc.push(idx + 1)
        return acc;
    }, [])
}


function convertArrToObj(terms) {
    return terms.reduce((acc, term) => {
        const [type, month] = term.split(" ") 
        acc[type] = month;
        return acc;
    }, {})
}

function getExpDate(curPrivacy, objectTerms) {
    const [date, type] = curPrivacy.split(" ")
    const joinDate = new Date(date.replace(/[.]/g, "-"))
        joinDate.setMonth(joinDate.getMonth() + +objectTerms[type])
        return joinDate;
}

function isExpired(expiryDate, today) {
    return expiryDate <= today;
}