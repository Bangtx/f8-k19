const numbers = [9, 8, 3, 5, 6, 2, 7]

// sap xep tu be den lon
// tim so be nhat - lon nhat
// tim cac cap so (2 so) co tong bang 10

// thuan toan sui bot - bubble sort
/*
* so bao to nhat, nang nhat -> dua xuong duoi
* */

const length = numbers.length

for (let i = 0; i < length; i = i + 1) {
    // i = 0
    for (let j = 0; j < length - 1 - i; j = j + 1) {
        // i = 0 -> j = 6
        // i = 1 -> j = 5
        // j = 0 -> curNumber = 9, nextNumber = 8
        const curNumber = numbers[j]
        const nextNumber = numbers[j + 1]

        if (curNumber > nextNumber) {
            numbers[j] = nextNumber
            numbers[j + 1] = curNumber
        }
    }
}

console.log(numbers)
// O(n^2)

// numbers.sort() -> quicksort
// console.log(numbers)