const solution = (n) => {
    let array = []
    const sorting = (depth, eachArray) => {
        if (depth === n) {
            array.push(eachArray)
            return
        }
        for (let i = 1; i <= 5; i++) {
            if (!eachArray.includes(i)) {
                const newArray = [...eachArray]
                newArray.push(i)
                sorting(depth + 1, newArray)
            }
        }
    }
    sorting(0, [])
    return array
}

console.log(solution(5))
