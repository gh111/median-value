var utils = require('./utils');
const assert = require('assert')

it('should pass successfully (test case 00)', () => {
    inputData = utils.readFileToList("./running-median/input00.txt")
    outputData = utils.readFileToList("./running-median/output00.txt", 'float')
    arr = []
    for (i = 1; i < inputData.length; i++) {
        arr.push(parseInt(inputData[i]))
        assert.equal(utils.calculateMedian(arr), outputData[i-1])
    }
})


it('should pass successfully (test case 01)', () => {
    inputData = utils.readFileToList("./running-median/input01.txt")
    outputData = utils.readFileToList("./running-median/output01.txt", 'float')
    arr = []
    for (i = 1; i < inputData.length; i++) {
        arr.push(parseInt(inputData[i]))
        assert.equal(utils.calculateMedian(arr), outputData[i-1])
    }
})


it('should pass successfully (test case 02)', () => {
    inputData = utils.readFileToList("./running-median/input02.txt")
    outputData = utils.readFileToList("./running-median/output02.txt", 'float')
    arr = []
    for (i = 1; i < inputData.length; i++) {
        arr.push(parseInt(inputData[i]))
        assert.equal(utils.calculateMedian(arr), outputData[i-1])
    }
})


it('should pass successfully (test case 03)', () => {
    inputData = utils.readFileToList("./running-median/input03.txt")
    outputData = utils.readFileToList("./running-median/output03.txt", 'float')
    arr = []
    for (i = 1; i < inputData.length; i++) {
        arr.push(parseInt(inputData[i]))
        assert.equal(utils.calculateMedian(arr), outputData[i-1])
    }
})