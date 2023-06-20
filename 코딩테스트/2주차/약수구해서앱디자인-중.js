// [문제 설명]
//  앱 디자인을 하려고 합니다. 디자인 영역 area가 주어질 때, 이 영역과 일치하는 사각형의 가로 w와 세로 h를 구하는 함수, solution을 완성해주세요.
//  단, 다음 조건을 만족해야 합니다.
//  - 세로 화면 최적화를 위해 가로는 세로보다 길 수 없습니다.
//  - 여러 가능한 가로, 세로 조합 중 두 값의 차이가 가장 적은 값을 찾습니다.

//  예를 들어, area가 4일 때, 커버할 수 있는 가로, 세로는 다음과 같습니다.
//  > 가로 w가 1 이고 세로 h가 4인 경우.
//  > 가로 w가 2 이고 세로 h가 2인 경우.
//  > 가로 w가 4 이고 세로 h가 1인 경우는 가로가 세로보다 길기 때문에 제외됩니다.
//  > 이 중, 가로, 세로의 차이가 가장 적은 가로 w가 2, 세로 h가 2인 [2, 2]를 반환합니다.

// [입력 형식]
//  - area는 1 이상 100,000 이하의 정수입니다.

// [출력 형식]
//  - 가로, 세로의 값을 배열로 담은 [w, h]를 반환합니다.
//  - 가로, 세로는 1 이상 100,000 이하의 정수입니다.

function solution(area) {
  let temp = [];
  let index = 1;
  while (index <= area) {
    if (area % index == 0) {
      temp.push(index);
    }
    index += 1;
  }
  console.log(temp);

  if (temp.length % 2 == 0) {
    let save = temp.length;
    for (let i = 0; i < save / 2 - 1; i++) {
      temp.shift();
      temp.pop();
    }
    return temp;
  } else {
    let save = temp.length;
    for (let i = 0; i < save / 2 - 1; i++) {
      temp.shift();
      temp.pop();
    }
    let temp2 = [];
    temp2.push(temp[0]);
    temp2.push(temp[0]);
    return temp2;
  }
}
