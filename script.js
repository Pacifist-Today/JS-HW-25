"use strict"

const accumulator = (num) => {
    let count = num
    const sum = (num) => {
        count += num
    }
    const result = () => {
        return count
    }
    return {
        sum,
        result,
    }
}

const counter = accumulator(3)
counter.sum(5)
counter.sum(7)
counter.sum(12)
console.log(counter.result())