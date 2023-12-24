const timeConvert = (minutes) =>{
  return `${minutes} minutes = ${Math.trunc(minutes / 60)} hour(s) and ${minutes % 60} minute(s)`
}
console.log(timeConvert(235))