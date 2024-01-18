const fs = require('fs')
const input = fs.readFileSync('./yes.txt').toString().trim().split('\n')

let count = 0
for (let i = 0; i < input.length; i++) {
    if (input[i][0] == '=') {
        console.log('')
        console.log('')
    }
    console.log(input[i])
    if (input[i][0] == '=') {
        console.log('')
    }
    if (input[i][0] == '-') {
        count++
        if (
            input[i + 1] &&
            input[i + 1][0] !== '-' &&
            input[i + 1][0] !== '='
        ) {
            count = 0
            console.log('')
            continue
        }
        if (count == 4) {
            count = 0
        }
    }
}
