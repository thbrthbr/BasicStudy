// 제로는 어느 날 길을 걷다가 a와 b로만 이루어진 세계로 워프했습니다.
// 문자열 알고리즘을 풀어야 원래의 세계로 돌아갈 수 있는 미션이 주어지고, 이를 해결해야합니다.
// 문자열 알고리즘은 a와 b로 이루어진 문자열 중 n개의 문자열을 a는 b로, b는 a로 변경하여 만들 수 있는 최장 부분 문자열을 알아내고 싶습니다.
// 최장 부분 문자열이란 ‘aaaaabbbb’와 같은 문자열이 있을 때, 최장 부분 문자열의 후보가 될 수 있는 경우는 ‘aaaaa’와 ‘bbbb’이고, ‘aaaaa’가 같은 문자로 이루어진 가장 긴 문자열입니다. 고로 ‘aaaaabbbb’의 최장 부분 문자열은 ‘aaaaa’입니다.
// 또, ‘abbbaababa’일 경우 후보가 될 수 있는 문자열은 ‘bbb’와 ‘aa’, ‘a’, ‘b’ 4가지가 존재하고 여기서 같은 문자로 이루어진 가장 긴 문자열인 최장 부분 문자열은 ‘bbb’입니다.
// 이런 경우에 n개의 문자열을 a는 b로, b는 a로 변경하여 만들 수 있는 문자열 중 최장 부분 문자열의 길이를 반환해주세요.
// 예를 들면 ‘abab’라는 문자열이 주어졌고 n=2인 상황이 있다면, 저희는 a 2개를 b로 바꾸던지, b 2개를 a로 바꾸어서 ‘aaaa’ 혹은 ‘bbbb’ 문자열로 변경할 수 있고 최장 부분 문자열의 길이는 4이기 때문에 4를 반환해주면 됩니다.

// [제한 사항]
// - n은 1이상 100,000이하이고, 문자열의 길이는 0 이상 n이하입니다.
// [입력 형식]
// - 변경할 수 있는 문자열의 개수 n과 문자열 ab가 주어집니다.
// [출력 형식]
// - 주어진 문자열 k의 최장 부분 문자열의 길이를 출력해주세요.

// 제한 시간: 30분
// 문제 유형: 이분탐색, 투포인터, DP
// 난이도: 중

/**
 * @param {int} n
 * @param {string} ab
 * @return {int}
 */

let n = 3;
let ab = "aabababaaaabaaaa";

function solution(n, ab) {
  let i = 0;
  let j = 0;
  let maxlen = 0;
  let count_a = 0;
  let count_b = 0;

  while (j < ab.length) {
    if (ab[j] == "a") {
      count_a++;
    } else {
      count_b++;
    }

    if (i < j && count_a > n && count_b > n) {
      //이 조건이 충족된 시점부터 최장부분문자열의 길이가 늘어나지 않음
      //이 조건이 충족되지 않았을 때부터 다시 길이가 늘어남
      //즉 a든 b든 count된 것이 적은 쪽이 최대로 바꿀 수 있는 숫자를 넘어가기 전까지
      //문자열의 길이를 쭉 늘리다가 넘어선 순간 늘리지 않고 유지됨
      //그리고 앞뒤로 a냐 b냐에 따라 가감을 반복함
      //이런 식으로 하면 저절로 작은쪽은 떨어지게 된다
      // a|bbb|^aabbbba -> a|bbb|a^abbbba -> a|bbb|aa^bbbba ->
      // a|bbb|aa/b/^bbba -> a|bbb|aa/bb/^bba -> a|bbb|aa/bbb/^ba -> abbbaa|bbbb|^a 이런 느낌
      if (ab[i] == "a") {
        count_a--;
      } else {
        count_b--;
      }
      i++;
    }

    j++;
    maxlen = Math.max(maxlen, j - i);
    //maxlen과 j-1 중 큰 것이 maxlen이 된다
  }

  return maxlen;
}

console.log(solution(n, ab));

//이해 안되면 갤탭에 메모해놨으니 ab최장문자열로 검색해서 결과보면서 다시 이해하자
