/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let rowArr = [];
    let result = [];

    for (let i = 0; i < s.length; i++) {
        rowArr.push('');
    }

    for (let i = 0; i < numRows; i++) {
        result.push([...rowArr]);
    }

    let row = 0;
    let column = 0;
    let direction = "down";

    for (let i = 0; i < s.length; i++) {
        result[row][column] = s[i];

        if (direction === "down") {
            if (row + 1 < numRows) {
                row++;
                direction = "down";
            } else {
                row--;
                column++;
                direction = "up";
            }
        } else {
            if (row > 0) {
                row--;
                column++;
            } else {
                row++;
                column++;
                direction = "down";
            }
        }
    }

    return result.reduce((prev, curr) => prev + curr.join(''), '');
};

const TEST_CASE_INPUT_OUTPUT = [
    [["PAYPALISHIRING", 3], "PAHNAPLSIIGYIR"],
    [["PAYPALISHIRING", 4], "PINALSIGYAHRPI"],
    [["A", 1], "A"],
]

TEST_CASE_INPUT_OUTPUT.forEach(([params, output], i) => {
    const outputActual = convert(...params);
    const isCorrect = output === outputActual;

    console.log(`Test case ${i + 1} ${isCorrect ? 'correct' : `incorrect; expected: "${output}"; actual: "${outputActual}"`}`);
});
