//노드개수

LinkedList.prototype.size = function () {
  console.log(this.length);
  //   return this.length;
};

// //비어있는지 확인

// LinkedList.isEmpty();

// //노드 출력

// LinkedList.printNode();

// //노드추가

// LinkedList.append(), LinkedList.insert();

// //노드삭제

// LinkedList.remove(), LinkedList.removeAt();

// //데이터 위치 확인

// LinkedList.indexOf();

//노드출력
LinkedList.prototype.printNode = function () {
  // 이렇게 치는 습관을 기르자
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(node.data + " -> ");
  }
  console.log("null");
};

//노드추가
LinkedList.prototype.append = function (data) {
  let node = new Node(data);
  current = this.head;
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

//구현해보기

//node 객체 생성 -> 데이터와 포인터 소유
function Node(data) {
  this.data = data;
  this.next = null;
}

//linkedlist 객체 생성
function LinkedList() {
  this.head = null;
  this.length = 0;
}

let l1 = new LinkedList();

l1.head = new Node(123);
l1.length++;

console.log(l1);

l1.head.next = new Node(456);
l1.length++;

console.log(l1);

l1.printNode();

l1.append(12);
l1.append(12);
l1.printNode();
l1.append(12);
l1.printNode();
l1.size();

//position 위치에 노드 추가
LinkedList.prototype.insert = function (
  value,
  position = 0 //디폴트 포지션 = 0
) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
  }
  this.length++;

  return true;
};

l1.insert(2, 1); // (넣을거, 위치)
l1.insert(3, 1);
l1.printNode();
l1.insert(3, 1);
l1.printNode();
l1.insert(3, 1);
l1.printNode();
l1.insert(3, 1);
l1.insert(3, 3);
l1.size();
l1.printNode();

//value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }
  if (current.data != value) {
    return null;
  }
  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }
  this.length--;

  return current.data;
};

l1.remove(3);
l1.printNode();

l1.remove(456);
l1.printNode();

l1.remove(3);

l1.printNode();

// 특정 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }
  let current = this.head,
    index = 0,
    prev;
  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
  this.length--;

  return current.data;
};

l1.printNode();
l1.removeAt(3);
l1.printNode();
l1.removeAt(3);
l1.printNode();
l1.removeAt(3);
l1.printNode();

//value 값을 갖는 노드 위치 출력
LinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  index = 0;

  while (current != null) {
    if (current.data == value) {
      return index;
    }
    index++;
    current = current.next;
  }

  return -1;
};

// 위 코드를 먼저 작성시 remove는 이렇게도 구현가능
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};
