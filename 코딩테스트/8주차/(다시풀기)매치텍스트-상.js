// [문제 설명]
// 주어진 패턴과 매칭되는 텍스트를 찾으려고 합니다. 텍스트와 패턴을 앞에서 한 글자씩 비교해서 모든 글자가 일치할 때 해당 텍스트는 패턴에 매칭된다고 합니다.
// 패턴과 텍스트는 알파벳 소문자로 이루어져 있으며, 패턴에는 특수문자 물음표(?)와 별표() 2개가 추가로 존재합니다. 물음표(?)는 어떤 글자와도 매칭된다고 가정하며, 별표()는 0글자 이상의 어떤 글자와도 매칭된다고 가정합니다.

// 예를 들어, 패턴 p fast*와 텍스트 배열 s [fastcampus, fast, faster, notfast, notfaster]가 있을 때 매칭되는 텍스트의 개수는 3개 (fastcampus, fast, faster)입니다.

// 패턴 p와 텍스트 배열 s가 주어질 때, 패턴에 매칭되는 텍스트의 개수를 출력하는 함수, solution을 완성해주세요.

// [입력 형식]

// 패턴 p는 길이가 1 이상 100 이하의 문자열입니다.
// 텍스트 배열 s는 길이가 1 이상 50 이하의 배열입니다.
// 텍스트는 길이가 1 이상 100 이하의 문자열입니다.
// [출력 형식]

// 주어진 패턴에 매칭되는 텍스트의 개수를 int 형식으로 출력합니다.

let p = "fast*";
let s = ["fastcampus", "fast", "faster", "notfast", "notfaster"];

// 설계
// 영번째: 어떤 기호들이 있는지 체크
// 첫번째: 기호가 앞에 오는지 / 뒤에 오는지 / 앞 뒤 둘 다 오는지를 체크
// 두번째: 기호가 별표인 경우와 물음표인 경우를 분리

// function solution(p, s) {}

// 아래 방법은 앞에 오는지와 뒤에 오는지만 체크 가능한 기능만 써둠
function solution(p, s) {
  let wordnum = 0;
  let F_starnum = 0;
  let B_starnum = 0;
  let F_quesnum = 0;
  let B_quesnum = 0;

  let pureword = "";

  for (let i = 0; i < p.length; i++) {
    let checker = 0;
    if (p[i] == "*") {
      if (checker == 0) {
        F_starnum++;
      } else {
        B_starnum++;
      }
    } else if (p[i] == "?") {
      if (checker == 0) {
        F_quesnum++;
      } else {
        B_quesnum++;
      }
    } else {
      checker++;
      pureword += p[i];
      wordnum++;
    }
  }

  if (p.length == F_starnum + B_starnum) {
    return s.length;
  }
  if (p.length == F_quesnum + B_quesnum) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (p.length == s[i].length) {
        count++;
      }
    }
    return count;
  }

  if (wordnum == 0) {
    if (F_quesnum + B_quesnum != 0) {
      let count = 0;
      for (let i = 0; i < s.length; i++) {
        if (F_quesnum + B_quesnum <= s[i].length) {
          count++;
        }
      }
      return count;
    }
  }

  //@@@@@@@@@@@@@@@@@@@여기까지 확정

  let word = "";
  let count = 0;
  let wordindex = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] == "*") {
      count = 0;
      if (wordindex != 0) {
        // 별표가 뒤에 붙는 경우 (word 존재)
        for (let j = 0; j < s.length; j++) {
          if (s[j].includes(word)) {
            let tempword = "";
            for (let a = 0; a < s[j].length; a++) {
              tempword += s[j][a];
              if (word[a] != s[j][a]) {
                break;
              }
              if (word == tempword) {
                count++;
                break;
              }
            }
          }
        }
      } else {
        // 별표가 앞에 붙는 경우 (word 존재 x)
        let virtual = "";
        for (let c = 0; c < p.length; c++) {
          if (p[c] != "*" && p[c] != "?") {
            virtual += p[c];
          }
        }

        for (let j = 0; j < s.length; j++) {
          if (s[j].includes(virtual)) {
            count++;
            let start = 0;
            let tempword = "";
            let made = 0;
            for (let a = 0; a < s[j].length; a++) {
              if (s[j][a] == virtual[start]) {
                tempword += s[j][a];
                start++;
              } else {
                tempword = "";
                start = 0;
              }

              if (virtual == tempword) {
                made++;
              }
              if (made > 0 && start == 0) {
                count--;
                break;
              }
            }
          }
        }
      }
    } else if (p[i] == "?") {
      if (wordindex != 0) {
        //물음표가 뒤에 붙는 경우 (word 존재)
        if (p[i + 1] != "*") {
          //물음표에 별표가 안 붙는 경우
        }
      } else {
        //물음표가 앞에 붙는 경우 (word 존재 x)
        if (p[i - 1] != "*") {
          //물음표에 별표가 안 붙는 경우
        }
      }
    } else {
      word += p[i];
      wordindex++;
    }
  }

  return count;
}

console.log(solution(p, s));
