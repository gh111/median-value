let fs = require('fs');

module.exports = {
    readFileToList: function (filePath, numberType = "int") {
        let parseString = fs.readFileSync(filePath).toString('utf-8');
        let list = [];

        parseString.split('\n').map(function (item, index) {

            if (item != '') {
                if (numberType == 'int') {
                    list.push(parseInt(item))
                } else if (numberType == 'float') {
                    list.push(parseFloat(item))
                }
            }
        });
        return list
    },

    calculateMedian: function (data) {
        let sortedList = data.sort((a, b) => a - b);

        let listLength = sortedList.length;

        if (listLength % 2 != 0) {
            let median = Math.floor(listLength / 2);
            let indexOfDivider = data.indexOf(median) + 1;
            return sortedList[indexOfDivider].toFixed(1);
        }
        else {
            let start = listLength / 2
            let end = start - 1
            return (sortedList[end] + sortedList[start]) / 2

        }
    }
};