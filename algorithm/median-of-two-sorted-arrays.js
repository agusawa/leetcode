/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums = nums1.concat(nums2);
    const sortedNums = nums.sort((a, b) => a - b);

    if (sortedNums.length % 2 === 0) {
        const num1 = sortedNums[sortedNums.length / 2 - 1];
        const num2 = sortedNums[sortedNums.length / 2];

        return (num1 + num2) / 2;
    } else {
        return sortedNums[Math.floor(sortedNums.length / 2)];
    }
};

const TEST_CASE_INPUT_OUTPUT = [
    [[[1, 3], [2]], 2],
    [[[1, 2], [3, 4]], 2.5],
]

TEST_CASE_INPUT_OUTPUT.forEach(([string, output], i) => {
    const outputActual = findMedianSortedArrays(...string);
    const isCorrect = output === outputActual;

    console.log(`Test case ${i + 1} is ${isCorrect ? 'correct' : `incorrect; expected: "${output}"; actual: "${outputActual}"`}`);
});