// function solution(chicken) {
//     let coupon = chicken;
//     while(chicken >= 10)
//         {
//             coupon += Math.floor(chicken/10);
//             chicken = chicken/10;
//         }

//     console.log(coupon);
//     return Math.floor(coupon/10);
// }

// function temp () {
//     let arr = [10];
//     let count = 0;
//     for(let i = 0; i < 1000; i++)
//     {
//         if(count)
//     }
// }

// console.log(solution(19))

// function solution(score) {
//     let aver = [];
//     for(let i = 0; i < score.length; i++){
//         aver.push((score[i][0] + score[i][1])/2);
//     }
//     console.log(aver)
//     let rank = 1;
//     let count = 0;
//     let set = -1;
//     let save = 0;
//     // let did = [];
//     let copy = aver.slice(0);
//     for(let i = 0; i < aver.length; i++){
//         if(aver[i] == Math.max(...copy))
//             {
//                 console.log(aver[i])
//                 if(set == aver[i])
//                     {
//                         // did.push(i);
//                         aver.splice(i, 1, rank);
//                         copy.splice(i, 1, -1);
//                         save++;
//                     }
//                 else
//                     {
//                         if(save !== 1) rank += save;
//                         else rank++;
//                         set = aver[i];
//                         // did.push(i);
//                         aver.splice(i, 1, rank);
//                         copy.splice(i, 1, -1);
//                         save = 1;
//                     }
//                 console.log(rank)
//                 console.log(copy)
//                 i = -1;
//                 count++;
//                 if(count >= aver.length) break;
//             }
//     }
//     return aver;
// }

// console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]))

// function solution(numlist, n) {
//     let temp = numlist.slice(0);
//     let answer = [];
//     let min = Infinity;
//     let the = 0;
//     for(let i = 0; i < numlist.length; i++)
//         {
//             for(let j = 0; j < temp.length; j++)
//                 {
//                         if(min >= Math.abs(temp[j] - n))
//                             {
//                                 min = Math.abs(temp[j] - n);
//                                 the = temp[j];
//                             }
//                 }
//                 console.log(the);
//                 answer.push(the);
//                 min = Infinity;
//                 temp.splice(temp.indexOf(the), 1);
//         }
//     return answer;
// }

// console.log(solution([1, 2, 3, 4, 5], 3))

// function solution(lines) {
//   for (let i = 0; i < lines.length; i++) {
//     for (let j = lines[i][0] + 1; j < lines[i][1]; j++) {
//       lines[i].push(j)
//     }
//     lines[i] = lines[i].sort((x, y) => x - y)
//   }
//   lines = lines.sort((x, y) => x[0] - y[0])
//   let answer = []
//   for (let i = 0; i < lines.length; i++) {
//     answer = answer.concat(lines[i])
//   }
//   console.log(answer)
//   let temp = []
//   let count = 0
//   let sum = 0
//   let save = []
//   let sub = ''
//   for (let i = 0; i < answer.length; i++) {
//     temp.push(answer[i])
//     if (temp.length > 1) {
//       if (temp[temp.length - 1] !== temp[temp.length - 2] + 1) {
//         sub += temp.pop()
//         count++
//       } else {
//         if (count > 0) {
//           sum += count
//           sum--
//           console.log(sum)
//           count = 0
//           for (let j = 0; j < save.length; j++) {
//             let test1 = (save[j] + sub).split('')
//             let test2 = Array.from(new Set(test1))
//             if (test1.length > test2.length) {
//               sum -= test1.length - test2.length - 1
//             }
//           }
//           save.push(sub)
//           sub = ''
//         }
//       }
//     }
//   }
//   if (count > 0) {
//     sum += count
//     sum--
//     count = 0
//     for (let j = 0; j < save.length; j++) {
//       let test1 = (save[j] + sub).split('')
//       let test2 = Array.from(new Set(test1))
//       if (test1.length > test2.length) {
//         sum -= test1.length - test2.length - 1
//       }
//     }
//     save.push(sub)
//     sub = ''
//   }
//   return sum
// }

// console.log(
//   solution([
//     [0, 9],
//     [2, 10],
//     [3, 10],
//   ]),
// )

// function solution(dots) {
//   let first = dots.shift()
//   let count = 0
//   while (count < 4) {
//     for (let i = 0; i < 3; i++) {
//       let oneX = first[0] - dots[0][0]
//       let oneY = first[1] - dots[0][1]
//       let twoX = dots[1][0] - dots[2][0]
//       let twoY = dots[1][1] - dots[2][1]
//       console.log(oneX)
//       console.log(twoX)
//       console.log(oneY)
//       console.log(twoY)
//       if (oneX == twoX && oneY == twoY) return 1
//       else {
//         let temp = dots.shift()
//         dots.push(temp)
//       }
//     }
//     dots.push(first)
//     first = dots.shift()
//     count++
//   }
//   return 0
// }

// console.log(
//   solution([
//     [1, 1],
//     [2, 2],
//     [3, 3],
//     [4, 4],
//   ]),
// )

// function solution(spell, dic) {
//   for (let i = 0; i < dic.length; i++) {
//     let copy = dic[i]
//     for (let j = 0; j < spell.length; j++) {
//       if (copy.includes(spell[j])) {
//         while (copy.includes(spell[j])) {
//           let copy2 = copy.split('')
//           copy2.splice(copy.indexOf(spell[j]), 1)
//           copy2 = copy2.join('')
//           copy = copy2
//         }
//       } else break
//     }
//     console.log(copy)
//     if (copy.length == 0) return 1
//   }
//   return 2
// }
// console.log(
//   solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som']),
// )

// function solution(spell, dic) {
//   let compare = spell.sort().join('')
//   for (let i = 0; i < dic.length; i++) {
//     let set = new Set(dic[i].split('').sort())
//     let sample = Array.from(set).join('')
//     if (sample == compare) return 1
//   }
//   return 2
// }

// console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']))

// function solution(board) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] == 1) {
//         if (i - 1 >= 0 && board[i - 1][j] !== undefined) {
//           if (board[i - 1][j] !== 1) {
//             board[i - 1][j] = 2
//           }
//         }
//         if (j - 1 >= 0 && board[i][j - 1] !== undefined) {
//           if (board[i][j - 1] !== 1) {
//             board[i][j - 1] = 2
//           }
//         }
//         if (i + 1 < board.length && board[i + 1][j] !== undefined) {
//           if (board[i + 1][j] !== 1) {
//             board[i + 1][j] = 2
//           }
//         }
//         if (j + 1 < board.length && board[i][j + 1] !== undefined) {
//           if (board[i][j + 1] !== 1) {
//             board[i][j + 1] = 2
//           }
//         }
//         if (
//           i + 1 < board.length &&
//           j + 1 < board.length &&
//           board[i + 1][j + 1] !== undefined
//         ) {
//           if (board[i + 1][j + 1] !== 1) {
//             board[i + 1][j + 1] = 2
//           }
//         }
//         if (
//           j + 1 < board.length &&
//           i - 1 > 0 &&
//           board[i - 1][j + 1] !== undefined
//         ) {
//           if (board[i - 1][j + 1] !== 1) {
//             board[i - 1][j + 1] = 2
//           }
//         }
//         if (j - 1 > 0 && i - 1 > 0 && board[i - 1][j - 1] !== undefined) {
//           if (board[i - 1][j - 1] !== 1) {
//             board[i - 1][j - 1] = 2
//           }
//         }
//         if (
//           i + 1 < board.length &&
//           j - 1 > 0 &&
//           board[i + 1][j - 1] !== undefined
//         ) {
//           if (board[i + 1][j - 1] !== 1) {
//             board[i + 1][j - 1] = 2
//           }
//         }
//       }
//     }
//   }
//   console.log(board)
//   console.log(board.flat(1).filter((x, y) => x == 0))
//   return board.flat(1).filter((x, y) => x == 0).length
// }

// console.log(
//   solution([
//     [0, 0, 0, 0, 1],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//   ]),
// )

// function solution(polynomial) {
//   let temp = polynomial.split(' + ')
//   let xNum = 0
//   let sum = 0
//   let sort = temp.map((x) => (isNaN(x) ? x : parseInt(x)))
//   for (let i = 0; i < sort.length; i++) {
//     if (isNaN(sort[i])) {
//       let num = sort[i].split('x')
//       xNum += num[0].length > 0 ? Number(num[0]) : 1
//     } else sum += sort[i]
//   }
//   if (xNum == 0) return sum.toString()
//   if (xNum == 1) return sum > 0 ? 'x + ' + sum : 'x'
//   return sum > 0 ? xNum + 'x + ' + sum : xNum + 'x'
// }

// console.log(solution('20x'))

// function solution(numbers) {
//   let max = 0
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (i != j) {
//         if (numbers[j] * numbers[i] > max) {
//           max = numbers[j] * numbers[i]
//         }
//       }
//     }
//   }
//   return max
// }

// console.log(solution([-1, -2, -5, -5]))

// function solution(keyinput, board) {
//     let start = [0, 0]
//     for (let i = 0; i < keyinput.length; i++) {
//         if (keyinput[i] == 'right') {
//             if (Math.floor(board[0] / 2) >= start[0] + 1) {
//                 start[0] = start[0] + 1
//             }
//         } else if (keyinput[i] == 'left') {
//             if (-1 * Math.floor(board[0] / 2) <= start[0] - 1) {
//                 start[0] = start[0] - 1
//             }
//         } else if (keyinput[i] == 'up') {
//             if (Math.floor(board[1] / 2) >= start[1] + 1) {
//                 start[1] = start[1] + 1
//             }
//         } else if (keyinput[i] == 'down') {
//             if (-1 * Math.floor(board[1] / 2) <= start[1] - 1) {
//                 start[1] = start[1] - 1
//             }
//         }
//         console.log(start)
//     }
//     return start
// }

// console.log(
//     solution(
//         ['down', 'down', 'down', 'down', 'down', 'down', 'down', 'down'],
//         [7, 18],
//     ),
// )

// function solution(emergency) {
//     let count = 1
//     let answer = Array.from({ length: emergency.length }, (v, i) => 0)
//     for (let i = 0; i < emergency.length; i++) {
//         let max = Math.max(...emergency)
//         for (let j = 0; j < emergency.length; j++) {
//             if (emergency[j] == max) {
//                 answer[j] = count
//                 count++
//                 emergency[j] = -1
//                 break
//             }
//         }
//     }
//     return answer
// }
// console.log(solution([3, 76, 24]))

// function solution(array) {
//     array = array.sort((x, y) => x - y)
//     let count = 1
//     let now = 0
//     let answer = [array[0], -1]
//     if (array.length == 1) return array[0]
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] == array[i + 1]) {
//             now = array[i]
//             count++
//         } else {
//             if (answer[1] < count) {
//                 answer.pop()
//                 answer.pop()
//                 answer.push(now)
//                 answer.push(count)
//             } else if (answer[1] == count && count !== 1) return -1
//             now = array[i]
//             count = 1
//         }
//     }
//     if (answer[1] == count) return -1
//     else if (answer[1] < count) {
//         answer.pop()
//         answer.pop()
//         answer.push(now)
//         answer.push(count)
//     }
//     return answer[0]
// }

// console.log(solution([0, 1, 1, 1, 1, 1]))

// function solution(array) {
//     let obj = {}
//     let arr = []
//     let set = Array.from(new Set(array)).sort((x, y) => x - y)
//     let count = 0
//     for (let i = 0; i < set.length; i++) {
//         obj[set[i]] = 0
//     }
//     for (let i = 0; i < array.length; i++) {
//         obj[array[i]] += 1
//     }
//     for (let i in obj) {
//         arr.push(obj[i])
//     }
//     let sort = arr.sort((x, y) => y - x)
//     console.log(obj)
//     console.log(arr)
//     if (arr.length == 1) {
//         for (let i in obj) {
//             return Number(i)
//         }
//     } else {
//         if (sort[0] == sort[1]) return -1
//         else {
//             let max = Math.max(...sort)
//             for (let i in obj) {
//                 if (obj[i] == max) {
//                     return Number(i)
//                 }
//             }
//         }
//     }
// }
// console.log(solution([1, 1, 1]))

// function solution(letter) {
//     morse = {
//         '.-': 'a',
//         '-...': 'b',
//         '-.-.': 'c',
//         '-..': 'd',
//         '.': 'e',
//         '..-.': 'f',
//         '--.': 'g',
//         '....': 'h',
//         '..': 'i',
//         '.---': 'j',
//         '-.-': 'k',
//         '.-..': 'l',
//         '--': 'm',
//         '-.': 'n',
//         '---': 'o',
//         '.--.': 'p',
//         '--.-': 'q',
//         '.-.': 'r',
//         '...': 's',
//         '-': 't',
//         '..-': 'u',
//         '...-': 'v',
//         '.--': 'w',
//         '-..-': 'x',
//         '-.--': 'y',
//         '--..': 'z',
//     }
//     let arr = letter.split(' ')
//     let answer = ''
//     for (let i = 0; i < arr.length; i++) {
//         answer += morse[arr[i]]
//     }
//     return answer;
// }

// function solution(numbers, k) {
//     let copy = numbers.slice(0)
//     while (k * 2 > copy.length) {
//         copy = copy.concat(numbers)
//     }
//     console.log(copy)
//     let last = 0
//     let times = 0
//     for (let i = 0; i < k; i++) {
//         last = copy[times]
//         times += 2
//     }
//     return last
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 90))

// function solution(n) {
//     let arr = []
//     let answer = []
//     for (let i = 2; i <= n; i++) {
//         if (n % i == 0) arr.push(i)
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 2) {
//             answer.push(arr[i])
//         }

//         let check = 0
//         for (let j = 2; j <= Math.ceil(Math.sqrt(arr[i])); j++) {
//             if (arr[i] % j === 0) {
//                 check = 1
//                 break
//             }
//         }
//         if (check == 0) answer.push(arr[i])
//     }
//     return answer
// }

// console.log(solution(420))

// function solution(balls, share) {
//     let n = 1
//     let n_m = 1
//     for (let i = share + 1; i <= balls; i++) {
//         n = BigInt(n) * BigInt(i)
//     }
//     for (let i = 1; i <= balls - share; i++) {
//         n_m = BigInt(n_m) * BigInt(i)
//     }
//     return n / n_m
// }

// console.log(solution(30, 15))

// function getCombinations(arr, N) {
//     const results = []
//     if (N === 1) return arr.map((value) => [value])

//     arr.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index + 1)
//         const combinations = getCombinations(rest, N - 1)
//         const attached = combinations.map((combination) => [
//             fixed,
//             ...combination,
//         ])
//         results.push(...attached)
//     })

//     return results
// }

// console.log(
//     getCombinations(
//         [
//             1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//             20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//         ],
//         15,
//     ),
// )

// function solution(s) {
//     return isNaN(+s) ? false : true
// }

// console.log(solution(''))

// function solution(n, m) {
//     var answer = []
//     let bitArr = []
//     let bigArr = []
//     let bigger = Math.max(n, m)
//     let bitter = Math.min(n, m)
//     let temp = bigger
//     for (let i = 1; i <= bitter; i++) {
//         if (temp % bitter == 0) {
//             answer.push(temp)
//             break
//         } else temp = bigger * i
//     }
//     if (answer.length == 0) answer.push(temp)
//     for (let i = 1; i <= bitter; i++) {
//         if (bitter % i == 0) bitArr.unshift(i)
//     }
//     for (let i = 1; i <= bigger; i++) {
//         if (bigger % i == 0) bigArr.unshift(i)
//     }
//     let copy = bigArr.length
//     for (let j = 0; j < copy; j++) {
//         for (let i = 0; i < bitArr.length; i++) {
//             if (bigArr[0] == bitArr[i]) {
//                 answer.unshift(bitArr[i])
//                 return answer
//             }
//         }
//         bigArr.shift()
//     }
//     return answer
// }

// console.log(solution(3, 20))

// function solution(number) {
//     let answer = []
//     let save = []
//     for (let i = 0; i < number.length; i++) {
//         for (let j = 0; j < number.length; j++) {
//             for (let a = 0; a < number.length; a++) {
//                 if (i !== j && j !== a && a !== i) {
//                     if (number[a] + number[i] + number[j] == 0) {
//                         if (
//                             !save.includes(
//                                 [a, i, j].sort((x, y) => x - y).join(''),
//                             )
//                         ) {
//                             let temp = []
//                             temp.push(number[a])
//                             temp.push(number[j])
//                             temp.push(number[i])
//                             answer.push(temp.sort().join(''))
//                             save.push([a, i, j].sort((x, y) => x - y).join(''))
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(answer)
//     return answer.length
// }
// solution([-3, -2, -1, 0, 0, 0, 1, 2, 3])

// function solution(number) {
//     let answer = 0
//     for (let i = 0; i < number.length - 2; ++i) {
//         for (let j = i + 1; j < number.length - 1; ++j) {
//             for (let k = j + 1; k < number.length; ++k) {
//                 if (number[i] + number[j] + number[k] == 0) ++answer
//             }
//         }
//     }
//     return answer
// }

// function solution(s) {
//     let obj = {
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9,
//         zero: '0',
//     }
//     let num = '0123456789'
//     let each = ''
//     let answer = ''
//     for (let i = 0; i < s.length; i++) {
//         if (!num.includes(s[i])) {
//             each += s[i].toLowerCase()
//             console.log(each)
//             if (obj[each]) {
//                 answer += obj[each]
//                 each = ''
//             }
//         } else {
//             answer += s[i]
//         }
//     }
//     return +answer
// }

// console.log(solution('111zero1'))

// function solution(n, arr1, arr2) {
//     let answer = []
//     for (let i = 0; i < n; i++) {
//         let fir =
//             arr1[i].toString(2).length < n
//                 ? '0'.repeat(n - arr1[i].toString(2).length) +
//                   arr1[i].toString(2)
//                 : arr1[i].toString(2)
//         let sec =
//             arr2[i].toString(2).length < n
//                 ? '0'.repeat(n - arr2[i].toString(2).length) +
//                   arr2[i].toString(2)
//                 : arr2[i].toString(2)
//         let thr = ''
//         for (let j = 0; j < fir.length; j++) {
//             thr += fir[j] == 1 || sec[j] == 1 ? 1 : 0
//         }
//         answer.push(thr)
//     }
//     for (let i = 0; i < answer.length; i++) {
//         let temp = answer[i].split('')
//         for (let j = 0; j < answer.length; j++) {
//             if (temp[j] == '1') temp[j] = '#'
//             else temp[j] = ' '
//         }
//         answer[i] = temp.join('')
//     }
//     console.log(answer)
//     return answer
// }

// ;['######', '### #', '## ##', ' #### ', ' #####', '### # ']

// solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])

// function solution(s) {
//     let answer = []
//     let check = false
//     for (let i = 0; i < s.length; i++) {
//         let idx = 0
//         for (let j = i - 1; j >= 0; j--) {
//             idx++
//             if (s[i] == s[j]) {
//                 answer.push(idx)
//                 check = true
//                 break
//             }
//         }
//         if (check == false) {
//             answer.push(-1)
//         }
//         check = false
//     }
//     return answer
// }

// console.log(solution('foobar'))

// function solution(s, skip, index) {
//     let alphabet =
//         'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
//     let answer = ''
//     for (let i = 0; i < s.length; i++) {
//         let temp = alphabet.indexOf(s[i])
//         let copy = index + temp
//         let save = 0
//         for (let j = temp + 1; j <= copy; j++) {
//             if (skip.includes(alphabet[j])) copy += 1
//             save = j
//         }
//         answer += alphabet[save]
//     }
//     return answer
// }

// function solution(a, b, n) {
//     let sum = 0
//     while (n >= a) {
//         sum += parseInt(n / a) * b
//         let copy = n
//         n = parseInt(n / a) * b
//         n += copy % a
//     }

//     return sum
// }

// function solution(k, score) {
//     let hallOfFame = [-1]
//     let present = []
//     for (let i = 0; i < score.length; i++) {
//         if (
//             hallOfFame.length < k ||
//             hallOfFame[hallOfFame.length - 1] <= score[i]
//         ) {
//             hallOfFame.push(score[i])
//         }
//         hallOfFame = hallOfFame.sort((x, y) => y - x)
//         if (hallOfFame.includes(-1)) {
//             hallOfFame.pop()
//         }
//         hallOfFame = hallOfFame.slice(0, k)
//         present.push(hallOfFame[hallOfFame.length - 1])
//         console.log(hallOfFame)
//     }
//     return present
// }

// console.log(solution(3, [50, 40, 40, 40, 40, 40, 40]))

// function solution(keymap, targets) {
//     let answer = []
//     for (let i = 0; i < targets.length; i++) {
//         let sum = 0
//         for (let a = 0; a < targets[i].length; a++) {
//             let less = []
//             for (let j = 0; j < keymap.length; j++) {
//                 if (keymap[j].includes(targets[i][a])) {
//                     less.push(keymap[j].indexOf(targets[i][a]) + 1)
//                 }
//             }
//             if (less.length !== 0) {
//                 sum += Math.min(...less)
//             } else {
//                 sum = 0
//                 break
//             }
//         }
//         sum == 0 ? answer.push(-1) : answer.push(sum)
//     }
//     return answer
// }

// console.log(solution(['ACC', 'CAC'], ['CD', 'C']))

// function solution(nums) {
//     let sum = 0
//     let repeat = nums.reduce((x, y) => x + y, 0)
//     let sosu = []
//     for (let i = 2; i <= repeat; i++) {
//         let flag = 0
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 flag = 1
//                 break
//             }
//         }
//         if (flag == 0) sosu.push(i)
//     }
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (sosu.includes(nums[i] + nums[j] + nums[k])) {
//                     sum++
//                 }
//             }
//         }
//     }
//     return sum
// }

// function solution(n) {
//     let sum = 0
//     for (let i = 2; i <= n; i++) {
//         let flag = 0
//         for (let j = 2; j < Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 flag = 1
//                 break
//             }
//         }
//         if (flag == 0) sum++
//     }
//     return sum
// }

// function solution(n) {
//     let sum = 0
//     for (let j = 2; j <= n; j++) {
//         let flag = 0
//         for (let i = 2; i <= Math.floor(Math.sqrt(j)); i++) {
//             if (j % i == 0) {
//                 flag = 1
//                 break
//             }
//         }
//         if (flag == 0) {
//             sum++
//         }
//     }
//     return sum
// }

// console.log(solution(10))

// function solution(nums) {
//     let sum = 0
//     let repeat = nums.reduce((x, y) => x + y, 0)
//     let sosu = []
//     for (let i = 2; i <= repeat; i++) {
//         let flag = 0
//         for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
//             if (i % j == 0) {
//                 flag = 1
//                 break
//             }
//         }
//         if (flag == 0) sosu.push(i)
//     }
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (sosu.includes(nums[i] + nums[j] + nums[k])) {
//                     sum++
//                 }
//             }
//         }
//     }
//     return sum
// }

// function solution(n, m, section) {
//     let sum = 0
//     let area = []
//     let start = section[0]
//     while (section.length > 0) {
//         area.push(start)
//         start++
//         if (area.length == m) {
//             let copy = section.length
//             for (let i = 0; i < copy; i++) {
//                 if (area.includes(section[0])) {
//                     section.shift()
//                 }
//             }
//             area = []
//             sum++
//         }
//     }
//     return sum
// }

// function solution(n, m, section) {
//     let sum = 0
//     for (let i = section[0]; i <= n; i++) {
//         if (i == section[0]) {
//             let these = i
//             for (let j = 0; j < m; j++) {
//                 if (these == section[0]) {
//                     section.shift()
//                 }
//                 these++
//             }
//             sum++
//             i = section[0] - 1
//         }
//     }
//     return sum
// }

// function solution(N, stages) {
//     let answer = []
//     let obj = {}
//     let survivor = stages.length
//     for (let i = 1; i <= N; i++) {
//         let sum = 0
//         for (let j = 0; j < stages.length; j++) {
//             if (stages[j] == i) sum++
//         }
//         if (survivor <= 0) {
//             obj[i] = 0
//         } else {
//             obj[i] = sum / survivor
//         }
//         survivor -= sum
//     }
//     console.log(obj)
//     let order = []
//     let value = []
//     for (let i in obj) {
//         order.push(i)
//         value.push(+obj[i])
//     }
//     let temp = order.length
//     for (let i = 0; i < temp; i++) {
//         let max = -1
//         let maxOrder = 0
//         let the = -1
//         for (let j = 0; j < value.length; j++) {
//             if (max < value[j]) {
//                 max = value[j]
//                 maxOrder = order[j]
//                 the = j
//             }
//         }
//         value.splice(the, 1)
//         order.splice(the, 1)
//         answer.push(maxOrder)
//     }
//     return answer
// }
// console.log(solution(8, [2, 1, 2, 6, 2, 4, 3, 3]))
//
// console.log(count())
//
// function solution(number, limit, power) {
//     let sum = 0
//     for (let i = 1; i <= number; i++) {
//         let count = 0
//         let flag = 0
//         for (let j = 1; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 if (i / j === j) count += 1
//                 else count += 2
//             }
//             if (count > limit) {
//                 count = power
//                 break
//             }
//         }
//         sum += count
//     }
//     return sum
// }
// function solution(X, Y) {
//     X = X.split('')
//     Y = Y.split('')
//     let arr = []
//     for (let i = 0; i < X.length; i++) {
//         for (let j = 0; j < Y.length; j++) {
//             if (X[i] == Y[j]) {
//                 arr.push(X[i])
//                 X.splice(i, 1, 'p')
//                 Y.splice(j, 1, 'q')
//             }
//         }
//     }
//     if (arr.length == 0) return '-1'
//     return String(+arr.sort((x, y) => y - x).join(''))
// }

// function solution(X, Y) {
//     let arr = []
//     for (let i = 0; i < X.length; i++) {
//         for (let j = 0; j < Y.length; j++) {
//             if (X[i] == Y[j]) {
//                 arr.push(X[i])
//                 X = X.replace(X[i], '_')
//                 Y = Y.replace(Y[j], '-')
//             }
//         }
//     }
//     if (arr.length == 0) return '-1'
//     return String(+arr.sort((x, y) => y - x).join(''))
// }
// console.log(solution('1010', '1010'))

function solution(n, lost, reserve) {
    let gusa = 0
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) gusa++
    }
    let possible = n - lost.length + gusa
    let oneCanGetHelp = {}
    for (let i = 1; i <= n; i++) {
        let count = []
        for (let j = 0; j < lost.length; j++) {
            if (i == lost[j] && !reserve.includes(i)) {
                if (
                    reserve.includes(lost[j] - 1) &&
                    !lost.includes(lost[j] - 1)
                )
                    count.push(lost[j] - 1)
                if (
                    reserve.includes(lost[j] + 1) &&
                    !lost.includes(lost[j] + 1)
                )
                    count.push(lost[j] + 1)
                oneCanGetHelp[lost[j]] = count
            }
        }
    }
    console.log(oneCanGetHelp)
    let used = []
    let counter = 0
    for (let i in oneCanGetHelp) {
        let temp = oneCanGetHelp[i].slice(0)
        let flag = 0
        while (temp.length !== 0) {
            if (!used.includes(temp[0])) {
                used.push(temp[0])
                flag = 1
                break
            }
            temp.shift()
        }
        if (flag == 1) {
            counter++
        }
    }
    return possible + counter
}

console.log(solution(7, [2, 4, 5, 6], [1, 3, 4, 5]))
