/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let rowMin = new Array(matrix.length).fill(Infinity);
    let colMax = new Array(matrix[0].length).fill(-Infinity);

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];

        for (let j = 0; j < matrix[i].length; j++) {
            if (row[j] < rowMin[i]) {
                rowMin[i] = row[j];
            }
            if (matrix[i][j] > colMax[j]) {
                colMax[j] = matrix[i][j]
            }

        }
    }

    let c = rowMin.find(t => colMax.includes(t));
    return c ? [c] : []

};