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
//     let que[0] = [0, 0]
//     for (let i = 0; i < keyinput.length; i++) {
//         if (keyinput[i] == 'right') {
//             if (Math.floor(board[0] / 2) >= que[0][0] + 1) {
//                 que[0][0] = que[0][0] + 1
//             }
//         } else if (keyinput[i] == 'left') {
//             if (-1 * Math.floor(board[0] / 2) <= que[0][0] - 1) {
//                 que[0][0] = que[0][0] - 1
//             }
//         } else if (keyinput[i] == 'up') {
//             if (Math.floor(board[1] / 2) >= que[0][1] + 1) {
//                 que[0][1] = que[0][1] + 1
//             }
//         } else if (keyinput[i] == 'down') {
//             if (-1 * Math.floor(board[1] / 2) <= que[0][1] - 1) {
//                 que[0][1] = que[0][1] - 1
//             }
//         }
//         console.log(que[0])
//     }
//     return que[0]
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
//     let que[0] = section[0]
//     while (section.length > 0) {
//         area.push(que[0])
//         que[0]++
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
//
//
//
//
//
// function solution(n, lost, reserve) {
//     let gusa = 0
//     for (let i = 0; i < lost.length; i++) {
//         if (reserve.includes(lost[i])) gusa++
//     }
//     let possible = n - lost.length + gusa
//     let oneCanGetHelp = {}
//     for (let i = 1; i <= n; i++) {
//         let count = []
//         for (let j = 0; j < lost.length; j++) {
//             if (i == lost[j] && !reserve.includes(i)) {
//                 if (
//                     reserve.includes(lost[j] - 1) &&
//                     !lost.includes(lost[j] - 1)
//                 )
//                     count.push(lost[j] - 1)
//                 if (
//                     reserve.includes(lost[j] + 1) &&
//                     !lost.includes(lost[j] + 1)
//                 )
//                     count.push(lost[j] + 1)
//                 oneCanGetHelp[lost[j]] = count
//             }
//         }
//     }
//     console.log(oneCanGetHelp)
//     let used = []
//     let counter = 0
//     for (let i in oneCanGetHelp) {
//         let temp = oneCanGetHelp[i].slice(0)
//         let flag = 0
//         while (temp.length !== 0) {
//             if (!used.includes(temp[0])) {
//                 used.push(temp[0])
//                 flag = 1
//                 break
//             }
//             temp.shift()
//         }
//         if (flag == 1) {
//             counter++
//         }
//     }
//     return possible + counter
// }

// console.log(solution(7, [2, 4, 5, 6], [1, 3, 4, 5]))
// function solution(numbers, hand) {
//     let mirotic = ''
//     let leftPlace = [1, 4, 7]
//     let rightPlace = [3, 6, 9]
//     let centerPlace = [2, 5, 8, 0]
//     let rightFinger = 10
//     let leftFinger = 12
//     let near2 = {
//         1: 1,
//         2: 0,
//         3: 1,
//         4: 2,
//         5: 1,
//         6: 2,
//         7: 3,
//         8: 2,
//         9: 3,
//         10: 4,
//         0: 3,
//         12: 4,
//     }
//     let near5 = {
//         1: 2,
//         2: 1,
//         3: 2,
//         4: 1,
//         5: 0,
//         6: 1,
//         7: 2,
//         8: 1,
//         9: 2,
//         10: 3,
//         0: 2,
//         12: 3,
//     }
//     let near8 = {
//         1: 3,
//         2: 2,
//         3: 3,
//         4: 2,
//         5: 1,
//         6: 2,
//         7: 1,
//         8: 0,
//         9: 1,
//         10: 2,
//         0: 1,
//         12: 2,
//     }
//     let near0 = {
//         1: 4,
//         2: 3,
//         3: 4,
//         4: 3,
//         5: 2,
//         6: 3,
//         7: 2,
//         8: 1,
//         9: 2,
//         10: 1,
//         0: 0,
//         12: 1,
//     }
//     for (let i = 0; i < numbers.length; i++) {
//         if (leftPlace.includes(numbers[i])) {
//             mirotic += 'L'
//             leftFinger = numbers[i]
//         } else if (rightPlace.includes(numbers[i])) {
//             mirotic += 'R'
//             rightFinger = numbers[i]
//         } else {
//             let lp = 0
//             let rp = 0
//             if (numbers[i] == 2) {
//                 lp = near2[leftFinger]
//                 rp = near2[rightFinger]
//                 if (lp > rp) {
//                     mirotic += 'R'
//                     rightFinger = numbers[i]
//                 } else if (lp < rp) {
//                     mirotic += 'L'
//                     leftFinger = numbers[i]
//                 } else {
//                     mirotic += hand[0].toUpperCase()
//                     hand == 'right'
//                         ? (rightFinger = numbers[i])
//                         : (leftFinger = numbers[i])
//                 }
//             } else if (numbers[i] == 5) {
//                 lp = near5[leftFinger]
//                 rp = near5[rightFinger]
//                 if (lp > rp) {
//                     mirotic += 'R'
//                     rightFinger = numbers[i]
//                 } else if (lp < rp) {
//                     mirotic += 'L'
//                     leftFinger = numbers[i]
//                 } else {
//                     mirotic += hand[0].toUpperCase()
//                     hand == 'right'
//                         ? (rightFinger = numbers[i])
//                         : (leftFinger = numbers[i])
//                 }
//             } else if (numbers[i] == 8) {
//                 lp = near8[leftFinger]
//                 rp = near8[rightFinger]
//                 if (lp > rp) {
//                     mirotic += 'R'
//                     rightFinger = numbers[i]
//                 } else if (lp < rp) {
//                     mirotic += 'L'
//                     leftFinger = numbers[i]
//                 } else {
//                     mirotic += hand[0].toUpperCase()
//                     hand == 'right'
//                         ? (rightFinger = numbers[i])
//                         : (leftFinger = numbers[i])
//                 }
//             } else {
//                 lp = near0[leftFinger]
//                 rp = near0[rightFinger]
//                 if (lp > rp) {
//                     mirotic += 'R'
//                     rightFinger = numbers[i]
//                 } else if (lp < rp) {
//                     mirotic += 'L'
//                     leftFinger = numbers[i]
//                 } else {
//                     mirotic += hand[0].toUpperCase()
//                     hand == 'right'
//                         ? (rightFinger = numbers[i])
//                         : (leftFinger = numbers[i])
//                 }
//             }
//         }
//     }
//     return mirotic
// }

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'))

// function solution(new_id) {
//     new_id = new_id.toLowerCase()
//     let possible = 'abcdefghijklmnopqrstuvwxyz1234567890-_.'
//     for (let i = 0; i < new_id.length; i++) {
//         if (!possible.split('').includes(new_id[i])) {
//             new_id = new_id.replace(new_id[i], ' ')
//         }
//     }
//     let str = ''
//     for (let i = 0; i < new_id.length; i++) {
//         if (new_id[i] == '.') {
//             str += '.'
//         } else {
//             if (str.length > 2) {
//                 new_id = new_id.replace(str, ' '.repeat(str.length))
//                 str = ''
//             } else {
//                 str = ''
//             }
//         }
//     }
//     new_id = new_id.split(' ').join('')
//     new_id = new_id.replace('..', '.')
//     new_id = new_id.split('')
//     new_id.join('')
//     console.log(new_id)
//     while (new_id[0] == '.' || new_id[new_id.length - 1] == '.') {
//         if (new_id[0] == '.') new_id.shift()
//         if (new_id[new_id.length - 1] == '.') new_id.pop()
//         if (new_id.length < 3) {
//             if (new_id.length == 0) {
//                 new_id.push('a')
//             }
//             while (new_id.length < 3) {
//                 new_id.push(new_id[new_id.length - 1])
//             }
//         }
//         new_id = new_id.join('').slice(0, 15).split('')
//     }

//     return new_id.join('')
// }

// console.log(solution('..................'))
//
// //
// function solution(n, info) {
//     let que[0] = []
//     let minus = 10
//     let peachScore = 0
//     for (let i = 0; i < info.length; i++) {
//         if (info[i] !== 0) {
//             que[0].push(minus * info[i])
//             peachScore += minus
//         } else que[0].push(0)
//         minus--
//     }
//     console.log(que[0])
//     let winList = []
//     let possible = []
//     let himWin = 10
//     let lionScore = 0
//     for (let i = 0; i < que[0].length; i++) {
//         let invest = 0
//         let eachScore = 0
//         let shot = 0
//         while (que[0][i] >= eachScore) {
//             if (n !== 0) {
//                 invest++
//                 n--
//                 eachScore = himWin * invest
//             } else {
//                 break
//             }
//         }
//         if (eachScore > que[0][i]) {
//             possible.push(invest)
//             lionScore += himWin
//         }
//         himWin--
//     }
//     console.log(possible)
//     // for (let i = 0; i < que[0].length; i++) {
//     //     let invest = 0
//     //     let eachScore = 1
//     //     while (que[0][i] >= invest) {
//     //         if (n !== 0) {
//     //             eachScore = invest * himWin
//     //             invest++
//     //             n--
//     //         } else {
//     //             break
//     //         }
//     //     }
//     //     possible.push(eachScore)
//     //     lionScore += eachScore
//     //     if (n == 0) {
//     //         if (lionScore > peachScore) {
//     //             winList.push(possible)
//     //         }
//     //         break
//     //     }
//     // }
// }
// function solution(n, info) {
//     let answer = Array(11).fill(0)
//     let maxCount = 0

//     function findMaxPoint(apeachCount, ryanCount, usedShots, point, arr) {
//         if (n < usedShots) return // 사용한 화살의 수가 전체 화살수 보다 큰 경우

//         if (point > 10) {
//             // 10포인트까지 모든 경우를 탐색한 경우
//             let diff = ryanCount - apeachCount
//             if (maxCount < diff) {
//                 // 포인트 차이가 maxCount보다 큰 경우
//                 arr[10] = n - usedShots
//                 maxCount = diff // 해당 포인트 차이를 maxCount에 저장
//                 answer = arr // 해당 경우를 answer에 저장
//             }
//             return
//         }

//         if (n > usedShots) {
//             // 라이언이 이겨 포인트를 얻는 경우
//             let current = [...arr]
//             current[10 - point] = info[10 - point] + 1
//             findMaxPoint(
//                 apeachCount,
//                 ryanCount + point,
//                 usedShots + info[10 - point] + 1,
//                 point + 1,
//                 current,
//             )
//         }

//         if (info[10 - point] > 0) {
//             // 어피치가 이겨 포인트를 얻는 경우
//             findMaxPoint(
//                 apeachCount + point,
//                 ryanCount,
//                 usedShots,
//                 point + 1,
//                 arr,
//             )
//         } else {
//             // 둘다 점수를 얻지 못하는 경우
//             findMaxPoint(apeachCount, ryanCount, usedShots, point + 1, arr)
//         }
//     }

//     findMaxPoint(0, 0, 0, 0, answer) // 0포인트 부터 나올수 있는 모든 경우를 탐색한다

//     return maxCount <= 0 ? [-1] : answer
// }
// const n = 5
// const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
// const result = solution(n, info)
// console.log(result)
// function generatePermutations(n) {
//     const permutations = []

//     function generate(currentPermutation, depth) {
//         console.log(currentPermutation)
//         if (depth === n) {
//             permutations.push([...currentPermutation]) // 현재 순열을 결과 배열에 추가합니다.
//             return
//         }

//         for (let i = 0; i <= n; i++) {
//             currentPermutation[depth] = i
//             generate(currentPermutation, depth + 1)
//         }
//     }

//     generate([], 0)

//     return permutations
// }

// console.log(generatePermutations(10))
// const solution = (n) => {
//     let array = []
//     const sorting = (depth, eachArray) => {
//         if (depth === n) {
//             array.push(eachArray)
//             return
//         }
//         for (let i = 1; i <= 5; i++) {
//             if (!eachArray.includes(i)) {
//                 const newArray = [...eachArray]
//                 newArray.push(i)
//                 sorting(depth + 1, newArray)
//             }
//         }
//     }
//     sorting(0, [])
//     return array
// }

// console.log(solution(5))

// []
// function solution(m, n, puddles) {
//     let arr = []
//     let que = [[1, 1, 0]]
//     let sorted = []
//     for (let i = 0; i < puddles.length; i++) {
//         sorted.push(puddles[i].join(''))
//     }
//     console.log(sorted)
//     while (que.length !== 0) {
//         let copy = [...que]
//         let copy2 = [...que]
//         if (
//             !sorted.includes([copy[0][0] + 1, copy[0][1]].join('')) &&
//             copy[0][0] + 1 <= n
//         ) {
//             que.push([copy[0][0] + 1, copy[0][1], copy[0][2] + 1])
//             arr.push([copy[0][0] + 1, copy[0][1], copy[0][2] + 1])
//         }
//         if (
//             !sorted.includes([copy2[0][0], copy2[0][1] + 1].join('')) &&
//             copy2[0][1] + 1 <= m
//         ) {
//             que.push([copy2[0][0], copy2[0][1] + 1, copy2[0][2] + 1])
//             arr.push([copy2[0][0], copy2[0][1] + 1, copy2[0][2] + 1])
//         }
//         console.log(que)
//         que.shift()
//     }
//     let maxX = 0
//     let maxY = 0
//     let min = Infinity
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] > maxX || arr[i][1] > maxY) {
//             maxX = arr[i][0]
//             maxY = arr[i][1]
//             count = 1
//             min = arr[i][2]
//         } else if (arr[i][0] == maxX && arr[i][1] == maxY) {
//             if (arr[i][2] == min) {
//                 count++
//             } else if (arr[i][2] < min) {
//                 count = 1
//             }
//         }
//     }
//     return count
// }

// console.log(solution(5, 6, [[2, 2]]))
// function solution(m, n, puddles) {
//     const MOD = 1000000007
//     const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

//     dp[1][1] = 1

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             if (i === 1 && j === 1) continue
//             if (puddles.some((puddle) => puddle[0] === j && puddle[1] === i)) {
//                 dp[i][j] = 0
//             } else {
//                 dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD
//             }
//         }
//     }

//     return dp[n][m]
// }

// function solution(new_id) {
//     new_id = new_id.toLowerCase()
//     let possible = 'abcdefghijklmnopqrstuvwxyz1234567890-_.'
// for (let i = 0; i < new_id.length; i++) {
//     if (!possible.split('').includes(new_id[i])) {
//         new_id = new_id.replace(new_id[i], ' ')
//     }
// }
//     let str = ''
//     for (let i = 0; i < new_id.length; i++) {
//         if (new_id[i] == '.') {
//             str += '.'
//         } else {
//             if (str.length > 2) {
//                 new_id = new_id.replace(str, ' '.repeat(str.length))
//                 str = ''
//             } else {
//                 str = ''
//             }
//         }
//     }
//     new_id = new_id.split(' ').join('')
//     new_id = new_id.replace('..', '.')
//     new_id = new_id.split('')
//     while (new_id[0] == '.' || new_id[new_id.length - 1] == '.') {
//         if (new_id[0] == '.') new_id.shift()
//         if (new_id[new_id.length - 1] == '.') new_id.pop()
//     }
//     if (new_id.length < 3) {
//         if (new_id.length == 0) {
//             new_id.push('a')
//         }
//         while (new_id.length < 3) {
//             new_id.push(new_id[new_id.length - 1])
//         }
//     }
//     new_id = new_id.join('').slice(0, 15).split('')
//     while (new_id[0] == '.' || new_id[new_id.length - 1] == '.') {
//         if (new_id[0] == '.') new_id.shift()
//         if (new_id[new_id.length - 1] == '.') new_id.pop()
//     }
//     if (new_id.length < 3) {
//         if (new_id.length == 0) {
//             new_id.push('a')
//         }
//         while (new_id.length < 3) {
//             new_id.push(new_id[new_id.length - 1])
//         }
//     }
//     return new_id.join('')
// }

// function solution(new_id) {
//     //1단계
//     new_id = new_id.toLowerCase()
//     let possible = 'abcdefghijklmnopqrstuvwxyz1234567890-_.'
//     //2단계
//     for (let i = 0; i < new_id.length; i++) {
//         if (!possible.includes(new_id[i])) {
//             new_id = new_id.replace(new_id[i], ' ')
//         }
//     }
//     new_id = new_id.split(' ').join('')
//     //3단계
//     let str = ''
//     let flag = false
//     for (let i = 0; i < new_id.length; i++) {
//         if (new_id[i] == '.' && flag == false) {
//             str += new_id[i]
//             flag = true
//         } else {
//             if (new_id[i] !== '.') {
//                 str += new_id[i]
//                 flag = false
//             }
//         }
//     }
//     new_id = str
//     //4~7단계
//     let bool = false
//     while (bool == false) {
//         bool = true
//         //4단계
//         if (new_id[0] == '.') {
//             new_id = new_id.split('')
//             new_id.shift()
//             new_id = new_id.join('')
//             bool = false
//         }
//         if (new_id[new_id.length - 1] == '.') {
//             new_id = new_id.split('')
//             new_id.pop()
//             new_id = new_id.join('')
//             bool = false
//         }
//         //5단계
//         if (new_id.length <= 0) {
//             new_id += 'a'
//             bool = false
//         }
//         //6단계
//         if (new_id.length >= 16) {
//             new_id = new_id.split('').splice(0, 15)
//             new_id = new_id.join('')
//             bool = false
//         }
//         //7단계
//         if (new_id.length <= 2) {
//             new_id += new_id[new_id.length - 1]
//             bool = false
//         }
//     }
//     return new_id
// }

// let arr = [
//     ['...!@BaT#*..y.abcdefghijklm', 'bat.y.abcdefghi'],
//     ['z-+.^.', 'z--'],
//     ['=.=', 'aaa'],
//     ['123_.def', '123_.def'],
//     ['abcde..f..g..hi..j.k', 'abcdefghijklmn'],
//     ['..............', 'aaa'],
//     ['', 'aaa'],
//     ['a', 'a'],
//     ['1', '1'],
//     ['1a', '1a'],
// ]
// for (let i = 0; i < arr.length; i++) {
//     console.log(solution(arr[i][0]))
// }

// function solution(ingredient) {
//     let count = 0
//     let save = 0
//     let flag = false
//     for (let i = 0; i < ingredient.length; i++) {
//         if (
//             ingredient[i] == '1' &&
//             ingredient[i - 1] == '3' &&
//             ingredient[i - 2] == '2' &&
//             ingredient[i - 3] == '1'
//         ) {
//             ingredient.splice(i - 3, 4)
//             i = i - 4
//             count++
//         }
//     }
//     return count
// }

// function solution(today, terms, privacies) {
//     var answer = []
//     let obj = {}
//     let month = today[5] + today[6]
//     let sorted = terms.map((x) => x.split(' '))
//     for (let i = 0; i < sorted.length; i++) {
//         let thisMonth = +month + +sorted[i][1]
//         if (thisMonth > 12) {
//             thisMonth = thisMonth % 12
//             let date = today
//             date = date.split('.')
//             date[0] = +date[0] + 1
//             date[1] = thisMonth
//             obj[terms[i][0]] = date.join('.')
//         } else {
//             thisMonth = thisMonth % 12
//             let date = today
//             date = date.split('.')
//             date[1] = thisMonth
//             obj[terms[i][0]] = date.join('.')
//         }
//     }
//     console.log(obj)
//     for (let i = 0; i < privacies.length; i++) {
//         let dateArr = privacies[i].split(' ')
//         let compare = obj[dateArr[1]]
//         if (+compare.split('.')[0] < +dateArr[0].split('.')[0]) {
//             result.push(i + 1)
//             continue
//         }
//         if (+compare.split('.')[1] < +dateArr[0].split('.')[1]) {
//             result.push(i + 1)
//             continue
//         }
//         if (+compare.split('.')[1] < +dateArr[0].split('.')[1]) {
//             result.push(i + 1)
//             continue
//         }
//     }
// }

// function solution(today, terms, privacies) {
//     let answer = []
//     let obj = {}
//     let sorted = today.split('.')
//     for (let i = 0; i < terms.length; i++) {
//         let sp = terms[i].split(' ')
//         obj[sp[0]] = sp[1]
//     }
//     for (let i = 0; i < privacies.length; i++) {
//         let dateDataArr = privacies[i].split(' ')z
//         let dateArr = dateDataArr[0].split('.')
//         dateArr[1] = +dateArr[1] + +obj[dateDataArr[1]]
//         if (dateArr[1] > 12) {
//             dateArr[0] = +dateArr[0] + Math.ceil(dateArr[1] / 12) - 1
//             dateArr[1] = dateArr[1] % 12 == 0 ? 12 : dateArr[1] % 12
//         }
//         if (+dateArr[2] == 1) {
//             if (+dateArr[1] == 1) {
//                 dateArr[2] = 28
//                 dateArr[1] = 12
//                 dateArr[0] = +dateArr[0] - 1
//             } else {
//                 dateArr[2] = 28
//                 dateArr[1] = +dateArr[1] - 1
//             }
//         } else {
//             dateArr[2] = +dateArr[2] - 1
//         }
//         if (+dateArr[0] > +sorted[0]) {
//             continue
//         } else if (+dateArr[0] == +sorted[0]) {
//             if (+dateArr[1] > +sorted[1]) {
//                 continue
//             } else if (+dateArr[1] == +sorted[1]) {
//                 if (+dateArr[2] < +sorted[2]) {
//                     answer.push(i + 1)
//                 }
//             } else {
//                 answer.push(i + 1)
//             }
//         } else {
//             answer.push(i + 1)
//         }
//     }
//     return answer.sort((x, y) => x - y)
// }

// console.log(solution('2020.12.17', ['A 12'], ['2010.01.01 A', '2019.12.17 A']))
// function solution(park, routes) {
//     let dog = []
//     for (let i = 0; i < park.length; i++) {
//         for (let j = 0; j < park[i].length; j++) {
//             if (park[i][j] == 'S') {
//                 dog = [i, j]
//             }
//         }
//     }
//     console.log(dog)
//     for (let i = 0; i < routes.length; i++) {
//         let go = routes[i].split(' ')
//         let movement = +go[1]
//         if (go[0] == 'E') {
//             if (dog[1] + movement <= park.length - 1) {
//                 let arrive = park[dog[0]][dog[1] + movement]
//                 if (arrive) {
//                     let ok = true
//                     for (let j = 1; j <= movement; j++) {
//                         if (park[dog[0]][dog[1] + j] == 'X') {
//                             ok = false
//                             break
//                         }
//                     }
//                     if (ok) dog = [dog[0], dog[1] + movement]
//                 }
//             }
//         }
//         if (go[0] == 'S') {
//             if (dog[0] + movement <= park.length - 1) {
//                 let arrive = park[dog[0] + movement][dog[1]]
//                 if (arrive) {
//                     let ok = true
//                     for (let j = 1; j <= movement; j++) {
//                         if (park[dog[0] + j][dog[1]] == 'X') {
//                             ok = false
//                             break
//                         }
//                     }
//                     if (ok) dog = [dog[0] + movement, dog[1]]
//                 }
//             }
//         }
//         if (go[0] == 'W') {
//             if (dog[1] - movement >= 0) {
//                 let arrive = park[dog[0]][dog[1] - movement]
//                 if (arrive) {
//                     let ok = true
//                     for (let j = 1; j <= movement; j++) {
//                         if (park[dog[0]][dog[1] - j] == 'X') {
//                             ok = false
//                             break
//                         }
//                     }
//                     if (ok) dog = [dog[0], dog[1] - movement]
//                 }
//             }
//         }
//         if (go[0] == 'N') {
//             if (dog[0] - movement >= 0) {
//                 let arrive = park[dog[0] - movement][dog[1]]
//                 if (arrive) {
//                     let ok = true
//                     for (let j = 1; j <= movement; j++) {
//                         if (park[dog[0] - j][dog[1]] == 'X') {
//                             ok = false
//                             break
//                         }
//                     }
//                     if (ok) dog = [dog[0] - movement, dog[1]]
//                 }
//             }
//         }
//     }
//     return dog
// }

// console.log(solution(['OXXO', 'XSXO', 'XXXX'], ['E 1', 'S 1']))
// function solution(s) {
//     s = s.split(' ').filter((x) => x.length > 0)
//     for (let i = 0; i < s.length; i++) {
//         s[i] = s[i].toLowerCase()
//         s[i] = s[i][0].toUpperCase() + s[i].slice(1)
//     }
//     return s.join(' ')
// }

// console.log(solution('3people    -- or'))
//
//
// function solution(s) {
//     let zeroCount = 0
//     let count = 0
//     let str = ''
//     while (s !== '1') {
//         for (let i = 0; i < s.length; i++) {
//             if (s[i] == '0') zeroCount++
//             else str += s[i]
//         }
//         s = str.length.toString(2)
//         str = ''
//         count++
//     }
//     return [count, zeroCount]
// }

// console.log(solution('1111111'))
// function solution(n) {
//     let count = 0
//     for (let i = 1; i <= n; i++) {
//         let sum = 0
//         for (let j = i; j <= n; j++) {
//             sum += j
//             if (sum == n) {
//                 count++
//                 break
//             }
//         }
//     }
//     return count
// }
// function solution(numbers, target) {
//     var answer = 0
//     const recursive = (sum, count) => {
//         if (count === numbers.length) {
//             if (sum === target) answer++
//             return
//         }
//         recursive(sum + numbers[count], count + 1)
//         recursive(sum - numbers[count], count + 1)
//     }
//     recursive(0, 0)
//     return answer
// }

// console.log(solution([4, 1, 2, 1], 4))
//
//
// function solution(maps) {
//     let opponent = [maps.length - 1, maps[0].length - 1]
//     let road = []
//     let copy = maps.map((v) => [...v])
//     const recursive = (cp, count, map) => {
//         let copied = map.map((v) => [...v])
//         copied[cp[0]][cp[1]] = 0
//         if (cp[0] == opponent[0] && cp[1] == opponent[1]) {
//             road.push(count + 1)
//             return 0
//         }
//         if (copied[cp[0] + 1] && copied[cp[0] + 1][cp[1]] !== 0) {
//             recursive([cp[0] + 1, cp[1]], count + 1, copied)
//         }
//         if (copied[cp[0]][cp[1] + 1] && copied[cp[0]][cp[1] + 1] !== 0) {
//             recursive([cp[0], cp[1] + 1], count + 1, copied)
//         }
//         if (copied[cp[0]][cp[1] - 1] && copied[cp[0]][cp[1] - 1] !== 0) {
//             recursive([cp[0], cp[1] - 1], count + 1, copied)
//         }
//         if (copied[cp[0] - 1] && copied[cp[0] - 1][cp[1]] !== 0) {
//             recursive([cp[0] - 1, cp[1]], count + 1, copied)
//         }
//         return false
//     }
//     recursive([0, 0], 0, copy)
//     return road.length > 0 ? Math.min(...road) : -1
// }

// console.log(
//     solution([
//         [1, 0, 1, 1, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 1, 0, 1],
//         [1, 1, 1, 0, 1],
//     ]),
// )
//
//
//
// function solution(n) {
//     let prev = 0
//     let cur = 1
//     for (let i = 2; i <= n; i++) {
//         let temp = cur
//         cur = (prev + cur) % 1234567
//         prev = temp
//     }
//     return cur
// }
// console.log(solution(100))
// function solution(s) {
//     s = s.split('')
//     let store = []
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] == s[i - 1]) {
//             store.pop()
//             s = store.concat(s.slice(i + 1))
//             store = []
//             i = 1
//         } else {
//             store.push(s[i])
//         }
//     }
//     if (s.length > 0) return 0
//     else return 1
// }
// console.log(solution('baaaabaaaa'))
// function solution(s) {
//     s = s.split('')
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] == s[i - 1]) {
//             s.splice(i - 1, 2)
//             console.log(s)
//             i = i - 2
//         }
//     }
//     if (s.length > 0) return 0
//     else return 1
// }
// function solution(s) {
//     const stack = []
//     for (let i = 0; i < s.length; i++) {
//         if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i])
//         else stack.pop()
//     }
//     return stack.length ? 0 : 1
// }

// console.log(solution('baabaa'))
// function solution(brown, yellow) {
//     let shrink = 0
//     for (let i = 3; i <= brown / 2 - 1; i++) {
//         let sero = shrink + 1
//         if (sero * (brown / 2 - 3 - shrink) == yellow) {
//             return [brown / 2 - 1 - shrink, sero + 2]
//         }
//         shrink++
//     }
// }
// console.log(solution(24, 24))
// function solution(n, words) {
//     let used = [];
//     let order = {};
//     let count = 0;
//     for(let i = 0; i < words.length; i++){
//         if(order[i%n + 1]){
//             order[i%n + 1] = [...order[i%n + 1], words[i]]
//         }
//         else{
//             order[i%n + 1] = [words[i]]
//         }
//     }
//     for(let i = 0; i < order["1"].length; i++){
//         for(let j in order){
//             if(used.includes(j[i])){
//                 if(used[used.length - 1][used[used.length - 1].length - 1] !== ){

//                    }
//                 else{
// used.push(j[i])
//                 }
//             }else{
//                 return [+j, i]
//             }
//         }
//     }
//     return [0, 0]
// }
//
//
//
//
// const outer1 = () => {
//     const x = 10
//     const inner1 = () => {
//         console.log(x)
//     }
//     inner1()
// }

// const inner2 = () => {
//     console.log(x)
// }

// const outer2 = () => {
//     let x = 10
//     inner2()
// }
// outer1()
// outer2()

// 클로저 개념 요약
const outer3 = () => {
    let x = 10
    const inner3 = () => {
        console.log(x)
    }
    return inner3
}

// 이게 클로저임
let closure = outer3()
closure()

// outer3의 반환값으로서 outer3의 내부함수인 inner3이 반환됨
// inner3은 같은 스코프에 존재했던 outer3의 지역변수인 x를 참조하여 출력하는 함수임
// 그런데 outer3의 결과값으로 반환된 inner3만 따로 변수에 할당해준 뒤 호출하게 되면
// 언뜻 보았을 때 outer3는 참조할 x가 존재하지 않는 것 같지만 제대로 x를 출력한다
// 이게 왜 가능하지? 이게 javascript의 클로저 개념의 함수이기 때문
// 클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(렉시컬 환경)인 스코프를 기억하여
// 자신이 선언됐을 때의 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수이다
// 즉 요약하면 클로저는 자신이 생성될 때의 환경을 기억하는 함수다
//
//
//
//

// function solution(phone_book) {
//     phone_book.sort()
//     console.log(phone_book.sort())
//     for (let i = 0; i < phone_book.length - 1; i++) {
//         console.log(phone_book[i + 1].slice(0, phone_book[i].length))
//         if (
//             phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)
//         ) {
//             return false
//         }
//     }
//     return true
// }

// console.log(solution(['123', '21']))

// function solution(progresses, speeds) {
//     let done = [];
//     let tasks = [];
//     for(let i = 0; i < progresses.length; i++){
//         tasks.push({
//             prg : progresses[i],
//             speed : speeds[i]
//         })
//     }
//     while(tasks.length > 0){
//         let count = 0;
//         for(let i = 0; i < tasks.length; i++){
//             tasks[i].prg += tasks[i].speed;
//             if(tasks[0].prg >= 100) {
//                 count++;
//                 tasks.shift();
//                 i -= 1;
//             }
//         }
//         if(count > 0) done.push(count);
//     }
//     return done;
// }

// function solution(progresses, speeds) {
//     let done = []
//     while (progresses.length > 0) {
//         let count = 0
//         for (let i = 0; i < progresses.length; i++) {
//             progresses[i] += speeds[i]
//             if (progresses[0] >= 100) {
//                 count++
//                 progresses.shift()
//                 speeds.shift()
//                 i -= 1
//             }
//         }
//         if (count > 0) done.push(count)
//     }
//     return done
// }
//
//
//
