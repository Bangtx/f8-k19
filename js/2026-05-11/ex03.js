const numbers = [9, 8, 3, 5, 6, 2, 7]


function quickSort(nums) {

    if (nums.length <= 1) return nums

    const mid = Math.floor(nums.length / 2)
    const pivod =  nums[mid]

    const leftArr = []
    const rightArr = []

    for (let i = 0; i < nums.length; i = i + 1) {
        if (mid === i) continue

        if (nums[i] < pivod) {
            leftArr.push(nums[i])
        }
        else {
            rightArr.push(nums[i])
        }
    }
    return [...quickSort(leftArr), pivod, ...quickSort(rightArr)]
}

const sortedNumbers = quickSort(numbers)

console.log(sortedNumbers)

