// [문제 설명]
// 제로는 x축과 y축이 존재하는 2차원 평면에서 좌표가 주어지면 그 좌표를 색칠하라는 임무를 받았습니다. 좌표는 (x, y)의 형태로 주어지고 같은 좌표는 주어지지 않습니다. 두 개의 다른 좌표 사이의 거리는 d(i,j) = | x_i-x_j  |-| y_i- y_j  | 로 구할 수 있습니다.
// 각 좌표에서 제로는 1부터 n 사이로 대표되는 색을 선택하여서 색을 좌표에 칠해야 합니다. 다만 색칠하는 데에는 2가지 조건이 필요합니다.
// 첫 번째 조건은 세 좌표를 선택했을 때, 세 좌표의 색이 모두 같다면 모든 좌표 사이의 거리는 같아야 한다는 점입니다. 세 좌표가 (a, b, c)라고 할 때, d(a, b) = d(a, c) = d(b, c)의 조건을 만족해야 합니다.
// 또, 두 번째 조건은 세 좌표를 선택했을 때, 두 좌표의 색이 같고 나머지 한 좌표가 색이 다르다면 같은 두 좌표의 거리가 나머지 한 좌표와의 거리보다 작아야 한다는 점입니다. 이를 식으로 표현하면 d(a, b) < d(a, c) 그리고 d(a, b) < d(b, c)입니다. 여기서 a와 b가 같은 색으로 표현되고, c가 다른 색으로 표현됩니다.
// 좌표들이 배열로 주어지면, 여기에서 위 조건을 만족하는 경우의 수가 몇 개인지 반환해주세요. 만약 세 좌표의 색이 모두 다르거나, 주어진 전체 좌표가 두 개라면 조건을 만족할 필요는 없어서 가능한 색 조합을 모두 구해주시면 됩니다. 또한 결과를 998244353로 mod 연산하여 반환해주세요.
// 예를 들어, 좌표가 [[1,0], [3,0], [2,1]]으로 주어졌을 경우 색칠이 가능한 경우의 수는 [1, 1, 1], [2, 2, 2], [3, 3, 3], [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]으로 총 9가지입니다.
// [제한 사항]
// - 좌표의 개수는 2개 이상 100개 이하입니다. 또한 좌표들은 모두 다른 좌표를 가지고 있습니다.
// [입력 형식]
// - 좌표 maps이 주어집니다.
// [출력 형식]
// - 색칠할 수 있는 모든 경우의 수를 고려하여 반환해주세요. 또한 결과를 998244353로 mod 연산하여 반환해주세요.
// 제한 시간: 40분
// 문제 유형: DP, 그래프, 그리디
// 난이도: 상

/**
 * @param {array} maps
 * @return {int}
 */
function solution(maps) {
  const f = [1];
  const n = maps.length;
  for (let i = 1; i <= n; i++) {
    f[i] = mul(f[i - 1], i);
  }
  const edges = [];
  const dis = (i, j) =>
    Math.abs(maps[i][0] - maps[j][0]) + Math.abs(maps[i][1] - maps[j][1]);
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const d = dis(i, j);
      edges.push([i, j, d]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);
  const st = [];
  const check = (arr) => {
    if (arr.length > 4) return false;
    let t = -1;
    for (let i = 0; i < arr.length; i++) {
      if (st[arr[i]]) return false;
      for (let j = i + 1; j < arr.length; j++) {
        if (st[arr[j]]) return false;
        if (t == -1) t = dis(arr[i], arr[j]);
        else if (t !== dis(arr[i], arr[j])) return false;
      }
    }
    return true;
  };
  const pos = [];
  for (let i = 0, j = 0; i < edges.length; i = ++j) {
    while (j + 1 < edges.length && edges[i][2] === edges[j + 1][2]) {
      j++;
    }
    const uf = new UnionFind(n);
    for (let k = i; k <= j; k++) {
      const [u, v] = edges[k];
      uf.union(u, v);
    }
    const groups = [...uf.group().values()];
    pos.push(...groups.filter(check));
    for (let k = i; k <= j; k++) {
      const [u, v] = edges[k];
      st[u] = 1;
      st[v] = 1;
    }
  }
  let p2 = 0,
    p3 = 0,
    p4 = 0;
  for (let arr of pos) {
    if (arr.length === 2) p2++;
    else if (arr.length === 3) p3++;
    else p4++;
  }
  let res = 0;
  const ff = [1n];
  for (let i = 1; i <= n; i++) {
    ff[i] = ff[i - 1] * BigInt(i);
  }
  [
    0,
    0,
    pos.filter((arr) => arr.length === 2).length,
    pos.filter((arr) => arr.length === 3).length,
    pos.filter((arr) => arr.length === 4).length,
  ];
  const c = (i, n) =>
    mul(f[n], mul(power(f[i], MOD - 2), power(f[n - i], MOD - 2)));
  for (let i = 0; i <= p2; i++) {
    for (let j = 0; j <= p3; j++) {
      for (let k = 0; k <= p4; k++) {
        const N = n - i - j * 2 - k * 3;
        res = mod(res + mul(f[N], c(i, p2), c(j, p3), c(k, p4), c(N, n)));
      }
    }
  }
  return mod(res);
}

const MOD = 998244353;
const mod = (num) => ((num % MOD) + MOD) % MOD;

function power(a, b) {
  let res = 1;
  while (b) {
    if (b & 1) res = mul(res, a);
    a = mul(a, a);
    b = b >> 1;
  }
  return res;
}

function mul(...args) {
  if (args.length === 1) return args[0];
  if (args.length > 2) return mul(args[0], mul(...args.slice(1)));
  const [a, b] = args;
  return ((((a >> 16) * b) % MOD) * 65536 + (a & 65535) * b) % MOD;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class UnionFind {
  constructor(n) {
    _defineProperty(this, "vis", []);
    this.n = n;
    this.p = [...new Array(n).keys()];
  }

  union(i, j) {
    this.vis[i] = this.vis[j] = 1;
    const [rooti, rootj] = [this.find(i), this.find(j)];
    if (rooti === rootj) return;
    this.p[rootj] = rooti;
  }

  find(i) {
    const { p } = this;
    while (i !== p[i]) {
      p[i] = p[p[i]];
      i = p[p[i]];
    }
    return i;
  }

  group() {
    const groups = new Map();
    for (let i = 0; i < this.n; i++) {
      var _groups$get;
      if (!this.vis[i]) continue;
      const root = this.find(i);
      if (!groups.has(root)) groups.set(root, []);
      (_groups$get = groups.get(root)) === null || _groups$get === void 0
        ? void 0
        : _groups$get.push(i);
    }
    return groups;
  }
}

// 이런 건 푸는 게 아님
