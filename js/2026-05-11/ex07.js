const numbers = [9, 8, 3, 5, 6, 2, 7]

/*
{
  0: 9,
  1: 8,
  2: 3,
  3: 5,
  4: 6
  5: 2
  6: 7
}
*/

// tim cac cap so (2 so) co tong bang 10


const map = {}

for (const number of numbers) {
    const target = 10 - number
    if (map[target]) {
        console.log(target, number)
    }
    map[number] = true
}

// const numberMap = {
//     9: 0,
//     8: 1,
//     3: 2,
//     5: 3,
//     6: 4,
//     2: 5,
//     7: 6,
// }
// O(m + n)
// for (let i = 0; i < numbers.length; i = i + 1) {
//     /*
//     * i = 2
//     * numbers[i] = 3
//     * target = 10 - 3 = 7
//     * numberMap[target] = 6
//     * */
//     let target = 10 - numbers[i]
//     if (numberMap[target] && i !== numberMap[target]) {
//         console.log(numbers[i], target)
//     }
// }
// O(n^2)
// for (const i of numbers) {
//     for (const j of numbers) {
//         if (i + j === 10) {
//             console.log(i, j)
//         }
//     }
// }