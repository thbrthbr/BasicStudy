// [문제 설명]
// 세 점의 좌표 x1,y1,x2,y2,x3,y3가 주어질 때, 세 점으로 만들 수 있는 삼각형의 넓이에 2를 곱하여 출력하는 함수, solution을 완성해주세요.

// [제한 사항]

// 만약 세 점이 일직선상에 위치하는 경우에는 0을 출력합니다.
// [입력 형식]

// points는 세 점의 x, y좌표가 x1,y1,x2,y2,x3,y3 순서대로 있는 길이가 6인 배열입니다.
// 각 좌표 값은 -1,000 이상 1,000 이하의 정수입니다. [출력 형식]
// 세 점을 연결하여 만들 수 있는 삼각형의 넓이에 2를 곱하여 int 형식으로 출력합니다.

function solution(points) {
  if (
    (points[3] - points[1]) / (points[2] - points[0]) ==
    (points[5] - points[3]) / (points[4] - points[2])
  ) {
    return 0;
  }

  let result1 = 0;

  result1 =
    points[0] * points[3] + points[2] * points[5] + points[4] * points[1];

  let result2 = 0;

  result2 =
    points[2] * points[1] + points[4] * points[3] + points[0] * points[5];

  return Math.abs(result1 - result2);
}
