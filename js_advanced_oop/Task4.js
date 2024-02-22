class Validator{
    isEmail(potentialEmail){
        const emailPattern = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailPattern.test(potentialEmail);
    }
    isDomain(potentialDomain){
        const domainPattern = /^(?!:\/\/)([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}$/;
        return domainPattern.test(potentialDomain);
    }
    isDate(potentialDate){
        const datePattern = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
        return datePattern.test(potentialDate);
    }
    isNumber(potentialNumber){
        const numberPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        return numberPattern.test(potentialNumber);
    }
}

let validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDate('12.05.2020'));