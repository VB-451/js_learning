const compare_dates = (firstDate, secondDate) =>{
    if (firstDate - secondDate > 0){
        return 'Date1 > Date2'
    } else if (firstDate - secondDate === 0){
        return 'Date1 = Date2'
    } else {
        return 'Date1 < Date2'
    }
}
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));