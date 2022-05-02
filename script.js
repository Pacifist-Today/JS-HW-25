"use strict"

// const accumulator = (num) => {
//     let count = num
//     const sum = (num) => {
//         count += num
//     }
//     const result = () => {
//         return count
//     }
//     return {
//         sum,
//         result,
//     }
// }

const accumulator = (num) => {
    let count = 0
    const sum = (num) => {
        if (count === 0) {
            count = num
            console.log(count)
        } else {
            count += num
            console.log(count)
        }
    }
    const result = () => {
        return count
    }
    return {
        sum,
        result,
    }
}

const counter = accumulator()
counter.sum(3)
counter.sum(5)
counter.sum(7)
counter.sum(12)
console.log(counter.result())