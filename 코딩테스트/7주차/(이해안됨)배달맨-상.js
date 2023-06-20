// [문제 설명]
// 아파트 단지에 배송구역을 나누려 합니다. 단지에는 배송이 가능한 구역과 놀이터와 같이 배송할 수 없는 구역이 있으며, 배송원의 근무 피로도를 고려하여 각 배송원이 맡은 구역은 인접해야 합니다.
// 아파트 단지의 크기 h x w가 주어질 때, 배송구역을 나누는 방법의 수를 구하는 함수, solution을 완성해주세요.

// 예를 들어, 아파트 단지의 크기 h, w가 3과 7 그리고 areaText가 '@.....@@.....@@@..@@@' 일 때, 결과는 5입니다.

// [제한 사항]

// 모든 배송원은 세 구역을 맡아야 합니다.
// 배송구역이 겹치거나, 배송할 수 없는 구역을 맡을 수 없습니다.
// 배송원은 인접한 구역만 맡을 수 있으며, 인접함은 상하좌우로 붙어있는 구역을 말합니다.
// 배송이 가능한 구역은 30을 넘지 않습니다.
// [입력 형식]

// 두 정수 h와 w는 1 이상 50 이하의 정수입니다.
// 공백이 없는 h * w개의 글자로 단지 모양이 주어집니다. (글자는 .과 @로 구성되어 있으며, .은 배송이 가능한 지역, @는 배송이 불가능한 지역을 나타냅니다.)
// [출력 형식]

// 주어진 아파트 단지의 배송구역을 나누는 방법의 수를 출력합니다.
function solution(h, w, areaText) {
  const area = makeArea(h, w, areaText);
  if (area === null) {
    return 0;
  }

  return countDeliveryCase(area);
}

const makeArea = function (h, w, areaText) {
  // area 배열 생성
  const area = [];

  let deliveryAvailableNum = 0;
  for (let i = 0; i < h; i++) {
    // area 이중 배열 생성
    area[i] = [];

    // area 값 설정
    for (let j = 0; j < w; j++) {
      const index = w * i + j;
      const token = areaText[index];
      const value = token === "." ? 0 : 1;
      area[i].push(value);

      if (token === ".") {
        deliveryAvailableNum++;
      }
    }
  }

  const isResolvable = deliveryAvailableNum % 3 === 0;
  return isResolvable ? area : null;
};

const countDeliveryCase = function (area) {
  // 아직 배송구역이 설정되지 않은 좌측 상단의 좌표를 구한다.
  let leastLeftY = -1;
  let leastLeftX = -1;
  for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area[0].length; x++) {
      if (area[y][x] === 0) {
        leastLeftY = y;
        leastLeftX = x;
        break;
      }
    }
    if (leastLeftY !== -1) break;
  }

  // 기저사례 : 모든 단지에 배송구역이 설정된 경우
  if (leastLeftY === -1) return 1;

  let result = 0;
  for (let typeIndex = 0; typeIndex < deliveryType.length; typeIndex++) {
    // 배송구역을 설정한다.
    if (setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, 1)) {
      // 설정한 배송구역이 유효하면 재귀호출 한다.
      result += countDeliveryCase(area);
    }

    // 설정한 배송 구역을 해제한다.
    setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, -1);
  }

  return result;
};

// 배송구역을 나누는 종류, [dy, dx] 셋
const deliveryType = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, -1],
  ],
];

const setDeliveryCase = function (area, y, x, type, action) {
  let available = true;

  for (let i = 0; i < deliveryType[0].length; i++) {
    const newY = y + deliveryType[type][i][0];
    const newX = x + deliveryType[type][i][1];

    const isOutOfRange =
      newY < 0 || newY >= area.length || newX < 0 || newX >= area[0].length;
    if (isOutOfRange) {
      available = false;
    } else {
      const isDuplicated = (area[newY][newX] += action) > 1;
      if (isDuplicated) {
        available = false;
      }
    }
  }

  return available;
};
