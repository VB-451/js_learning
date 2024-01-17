const birthDate = new Date(2003, 8, 20);
const ageFunc = (birthdate) =>{
    const dateDiff = (new Date()) - birthdate;
    const ageInYears = dateDiff / 365.25 / 24 / 60 / 60 / 1000;
    const ageInMonths = Math.round(ageInYears * 12);
    const ageInDays =  Math.round(dateDiff / 24 / 60 / 60 / 1000);

    console.log(Math.floor(ageInYears))
    console.log(ageInMonths);
    console.log(ageInDays);
} 
ageFunc(birthDate)