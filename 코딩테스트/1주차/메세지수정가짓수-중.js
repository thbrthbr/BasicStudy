// 제주도에 있는 제로는 저희와 메신저를 통해서 연락을 하려고 합니다.
// 제로와 저희가 사용하고 있는 메신저는 제로가 직접 만든 메신저여서 w를 uu로 보내고, m을 nn으로 보내는 버그가 존재합니다.
// 버그를 잡는 것이 중요한데, 제로는 버그를 잡을 생각이 없어 보입니다.
// 그래서 저희는 제로가 메세지를 보냈을 때, 버그를 고려하여 원래 보내려던 메세지의 가능한 가짓수를 생각해보기로 했습니다.

// 만약 제로가 보낸 메세지가 'bannauua'라면, ['bannauua', 'bamauua', 'bannawa', 'banawa'] 4가지의 경우의 수가 존재합니다.
// 이 때 저희는 숫자 4를 반환해주면 됩니다.

// [제한 사항]
// - message의 길이는 1 이상 100,000 이하입니다.
// - message에는 알파벳 소문자만 존재합니다.

// [입력 형식]
// - 문자열 'message'가 입력으로 주어집니다.
// [출력 형식]
// - 주어진 문자열에서 버그를 고려하여 원래 보내려던 메세지의 가능한 가짓수를 반환해주세요.

// 제한 시간: 30분
// 문제 유형: DP (Dynamic Programming)
// 난이도: 중

/**
 * @param {string} message
 * @return {int}
 */

let message =
  "fjyakzltbxkzfnbpcofxoqelqfvzogkadeecvxiqextvhctrzzdrbjyyrfxfjarhyodqddpznxnvfrnoaavhldjvqvzhktzjyyvi";
// u -> 1개
// uu -> uu w 2개 = 1개 + 1개
// uuu -> uw wu uuu 3개 = 1개 + 2개
// uuuu-> uwu ww wu uw 5개 = 3개 + 2개
// uuuuu -> wwu wuw uww uuwu uwuu uuuuu uuuw wuuu 8개 = 5개 + 3개
// uuuuuu -> 13개 = 8개 + 5개
// uuuuuuu -> 8
// uuuuuuuu -> 13
// dp[i] = dp[i-1] + dp[i-2]

function solution(message) {
  const dp = [1];
  dp[-1] = 1; //자바스크립트에선 이런 게 된다 '-1' : 1 식으로 저장됨

  for (let i = 1; i < message.length; i++) {
    dp[i] = dp[i - 1]; // 어차피 최종값만 중요하고 처음엔 '-1' : 1 식으로 저장되어 있어서 이렇게 해줘야 에러 안남
    if (
      message[i] == message[i - 1] &&
      (message[i] == "u" || message[i] == "n")
    ) {
      //   console.log(dp[i]);
      //   console.log(dp[i - 2]);
      dp[i] = dp[i] + dp[i - 2];
      //   console.log(dp[i]);
      //   console.log("----");
    }
  }

  return dp[message.length - 1];
}

console.log(solution(message));
