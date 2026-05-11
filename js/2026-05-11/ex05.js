// for _ of
// cach viet khac cua vong for -> duyet qua tung phan tu cua mang

const numbers = [10, 21, 3, 6, 34, 50]

// for(const number of numbers) {
//     if (number === 4) break
//
//     console.log(number)
// }

// forEach

numbers.forEach((number, index) => {
    console.log('ok anh em', number, index)
})