// 총 4가지 종류의 괄호가 있습니다.
// 각 괄호들은 서로 짝이 있으며 그짝은 괄호가 열리고 닫히는 것을 의미합니다.

// '(' ')', '{' '}', '[' ']', '<' '>'

// 이때 주어진 스트링 S가 괄호가 서로 교차하지 않은 형태로 짝이 잘 맞게 이루어진 문자열인지 판단하는 함수를 작성하세요.

// [입력]
// 괄호로 이루어진 스트링 S

// [출력]
// 괄호가 서로 교차하지 않고 짝이 잘 맞게 이루어진다면 1
// 그렇지 않으면 0을 리턴

function solution(S) {
  if (S.length % 2 == 1) {
    return 0;
  }
  let temp = [];
  temp = S.split("");
  let i = 0;
  let save = [];
  if (temp[0] == "(" || temp[0] == "{" || temp[0] == "<" || temp[0] == "[") {
    save.push(temp[0]);
  } else {
    return 0;
  }
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] == "(" || temp[i] == "{" || temp[i] == "<" || temp[i] == "[") {
      save.push(temp[i]);
      continue;
    }
    if (save[save.length - 1] == "(") {
      if (temp[i] != ")") {
        return 0;
      } else {
        save.pop();
        continue;
      }
    }
    if (save[save.length - 1] == "{") {
      if (temp[i] != "}") {
        return 0;
      } else {
        save.pop();
        continue;
      }
    }
    if (save[save.length - 1] == "[") {
      if (temp[i] != "]") {
        return 0;
      } else {
        save.pop();
        continue;
      }
    }
    if (save[save.length - 1] == "<") {
      if (temp[i] != ">") {
        return 0;
      } else {
        save.pop();
        continue;
      }
    }
  }
  return 1;
}
