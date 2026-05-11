const numbers = [9, 8, 3, 5, 6, 2, 7]

// tim so be nhat - lon nhat

// O(n)
// O(1) Olog(n)
const getMaxValue = (arr) => {
    let maxValue = null

    if (arr.length === 0) {
        return null
    }

    maxValue = arr[0]

    for (const number of arr) {
        if (maxValue < number) maxValue = number
    }

    return maxValue
}

console.log(getMaxValue(numbers))

// merge sort -> O(logn)

