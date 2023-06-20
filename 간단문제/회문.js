function longestPalindrome(s) {
  let palindromes = [];

  if (s.length <= 1) {
    return s;
  }

  for (var i = 0; i < s.length; i++) {
    j = 0;
    k = 0;
    while (s[i + j] === s[i - j] && s[i + j] && s[i - j]) {
      j++;
    }
    palindromes.push(s.slice(i - (j - 1), i + j)); // 홀수개의 문자를 갖는 회문 저장
    j = 0;

    while (s[i + 1 + k] === s[i - k] && s[i + 1 + k] && s[i - k]) {
      k++;
    }
    palindromes.push(s.slice(i - (k - 1), i + 1 + k)); // 짝수개의 문자를 갖는 회문 저장
    k = 0;
  }

  return palindromes.sort((a, b) => b - a)[0]; // 내림차순 정렬을 하고 맨 처음 요소 리턴
}
