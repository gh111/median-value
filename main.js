let fs = require('fs');

let parseString = fs.readFileSync("./running-median/input00.txt").toString('utf-8');
let list = [];

parseString.split('\n').map(function(item, index) {

    if (index !== 0 && item.length) {
        list.push(parseInt(item))

        console.log(calculateMedian(list))
    }

});

function calculateMedian(data) {
    let sortedList = data.sort((a, b) => a - b);

    let listLength = sortedList.length;

    if ( listLength % 2 != 0 ) {
        let median = Math.floor(listLength/2);
        let indexOfDivider = list.indexOf(median) + 1;
        return sortedList[indexOfDivider].toFixed(1);
    }
    else {
        let start = listLength/2
        let end = start - 1
        return (sortedList[end] + sortedList[start])/2

    }
}
