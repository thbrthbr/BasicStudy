const fs = require('fs')
let input = fs.readFileSync('./yes.txt').toString().trim().split('\n')

let count = 0
let formatted = []
for (let i = 0; i < input.length; i++) {
    input[i] = input[i].replace(/\r/, '')
}
for (let i = 0; i < input.length; i++) {
    if (input[i].length !== 0) {
        formatted.push(input[i])
    }
}
for (let i = 0; i < formatted.length; i++) {
    for (let j = 0; j < 4; j++) {
        formatted[i] = formatted[i].replace(/\\/, '').trim()
    }
}
let temp = []
for (let i = 0; i < formatted.length; i++) {
    if (formatted[i][0] == '=') {
        temp.push('')
    }
    temp.push(formatted[i])
    if (formatted[i][0] == '=') {
        temp.push('')
    }

    if (formatted[i][0] == '-') {
        count++
        if (
            formatted[i + 1] &&
            formatted[i + 1][0] !== '-' &&
            input[i + 1][0] !== '='
        ) {
            count = 0
            temp.push('')
            continue
        }
        if (count == 4) {
            count = 0
        }
    }
}

// console.log(temp.join('\n'))

const blob = new Blob([temp.join('\n')], { type: 'text/plain' })
const url = window.URL.createObjectURL(blob)
const a = document.createElement('a')
a.download = e.value
a.href = url
a.click()
setTimeout(() => {
    window.URL.revokeObjectURL(url)
}, 100)

// input = formatted
// for (let i = 0; i < input.length; i++) {
//     if (input[i][0] == '=') {
//         console.log('')
//         console.log('')
//     }
//     console.log(input[i])
//     if (input[i][0] == '=') {
//         console.log('')
//     }
//     if (input[i][0] == '-') {
//         count++
//         if (
//             input[i + 1] &&
//             input[i + 1][0] !== '-' &&
//             input[i + 1][0] !== '='
//         ) {
//             count = 0
//             console.log('')
//             continue
//         }
//         if (count == 4) {
//             count = 0
//         }
//     }
// }
// console.log(input)
