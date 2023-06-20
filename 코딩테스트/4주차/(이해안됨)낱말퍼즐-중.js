// [문제 설명]
//  낱말 퍼즐을 풀려고 합니다. 퍼즐 판은 4 x 4 크기로 임의의 한글이 섞여 있습니다.
//  주어진 낱말이 퍼즐 판에 인접한 형태로 존재하는지 구하는 함수, solution을 완성해주세요.

//  예를 들어, puzzle [[`대`, `한`, `가`, `나`], [`국`, `민`, `다`, `라`], [`마`, `바`, `사`, `아`], [`자`, `차`, `카`, `타`]] 과 word `대한민국`이 있을 때,
//  > puzzle[0][0] = `대`
//  > puzzle[0][1] = `한`
//  > puzzle[1][1] = `민`
//  > puzzle[1][0] = `국`
//  으로 결과는 true입니다.

// [제한 사항]
//  - 모든 낱말은 한글입니다.
//  - 인접함은 상하좌우로 붙어있는 단어를 말합니다.
//  - word는 공백없는 문자열입니다.
//  - 한번 사용된 퍼즐 판의 낱말은 또다시 사용할 수 없습니다.

// [입력 형식]
//  - puzzle은 4 * 4 크기의 배열입니다.
//  - word는 길이가 1 이상 10 이하의 문자열입니다.

// [출력 형식]
//  - 주어진 낱말이 퍼즐 판에 인접한 형태로 존재하는지를 출력합니다.

/**
 * @param puzzle {string[][]}
 * @param word {string}
 * @returns {boolean}
 */
function solution(puzzle, word) {
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (move(puzzle, word, x, y, 0)) return true;
    }
  }

  return false;
}

const SIZE = 4;
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function move(puzzle, word, x, y, moveIndex) {
  if (puzzle[x][y] !== word[moveIndex]) return false;
  if (moveIndex === word.length - 1) return true;

  puzzle[x][y] = "x";

  for (const [dx, dy] of DIRECTIONS) {
    const dirX = x + dx;
    const dirY = y + dy;
    if (0 <= dirX && dirX < SIZE && 0 <= dirY && dirY < SIZE) {
      if (move(puzzle, word, dirX, dirY, moveIndex + 1)) return true;
    }
  }

  return false;
}

// bfs 개념 알아야 풀 수 있음
