var utils = require('./utils');

data = utils.readFileToList("./running-median/input00.txt")

arr = []
for (i = 1; i < data.length; i++) {
    arr.push(data[i])
    console.log(utils.calculateMedian(arr))
}