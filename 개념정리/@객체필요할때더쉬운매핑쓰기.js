function solution(p, s) {
  let arr = s.split(" ");
  if (arr.length !== p.length) return false;
  let map = new Map();

  for (let i = 0; i < p.length; i++) {
    if (map.has(p[i]) && map.get(p[i]) !== arr[i]) return false;
    console.log(p[i], arr[i]);
    map.set(p[i], arr[i]);
  }
  return true;
}

//map.has(키값) 식으로 쓰면 해당 키값이 있는지 없는지 체크가능

//map.set(키값, 값) 식으로 저장가능

//map.get(키값) 식으로 써서 해당 키값의 값 가져오기 가능

// new Map() – 맵을 만듭니다.
// map.set(key, value) – key를 이용해 value를 저장합니다.
// map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
// map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
// map.delete(key) – key에 해당하는 값을 삭제합니다.
// map.clear() – 맵 안의 모든 요소를 제거합니다.
// map.size – 요소의 개수를 반환합니다.
