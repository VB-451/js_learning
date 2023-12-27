const students = [
    {
        name: 'First',
        marks: [3, 7, 2, 9]
    },
    {
        name: 'Second',
        marks: [1, 6, 8, 4]
    },
    {
        name: 'Third',
        marks: [10, 6, 2, 7]
    },
    {
        name: 'Fourth',
        marks: [9, 3, 6, 1]
    },
    {
        name: 'Fifth',
        marks: [4, 8, 10, 2]
    }
]
const average = (arr) =>{
    return arr.reduce((acc, value) => acc + value) / arr.length;
}

//1
const averageFor = (arr) =>{
    for (item of arr){
        console.log(item.name, average(item.marks))
    }
}

//2
const averageBelowFive = (arr) =>{
    for (item of arr){
        if (average(item.marks) < 5){
            console.log(item.name);
        }
    }
}

//3
const minMaxAverage = (arr) =>{
    const averages = arr.map(item => average(item.marks));
    const minAvrInd = averages.indexOf(Math.min(...averages));
    const maxAvrInd = averages.indexOf(Math.max(...averages));
    console.log(arr[minAvrInd].name, averages[minAvrInd]);
    console.log(arr[maxAvrInd].name, averages[maxAvrInd]);
}

//4
const reverseAvrSort = (arr) =>{
    arr.sort((a, b) => average(b.marks) - average(a.marks));
}

//5
const moreThanAvg = (arr) =>{
    const averages = arr.map(item => average(item.marks));
    const averagePerAll = average(averages);
    for (item of arr){
        if (average(item.marks) > averagePerAll){
            console.log(item.name, average(item.marks));    
        }
    }    
}