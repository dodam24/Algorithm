const list = {
  head : {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null
        }
      }
    }
  }
}

// list.head
// {value: 90, next: {…}}
// list.head.value
// 90
// list.head.next.value
// 10
// list.head.next.next.value
// 89

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init');
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }


    get fullData() {
      let 순회용현재노드 = this.head;
      순회용현재노드 = 순회용현재노드.next;
  
      let s = '';
      for (let i = 0; i < this.데이터수; i++) {
        s += `${순회용현재노드.data}, `
        순회용현재노드 = 순회용현재노드.next;
      }
      return JSON.parse(`[${s.slice(0, -2)}]`); // (6) [1, 2, 3, 10, 20, 30] - 실제 배열(Array) 출력
    }


  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);

    this.tail.next = 새로운노드;
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }


  toString() {
    // return 'hello world';
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = '';
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`
      순회용현재노드 = 순회용현재노드.next;
    }
    return `[${s.slice(0, -2)}]`; // [1, 2, 3, 10, 20, 30] 형태로 출력 (배열 X)
  }


  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data);

    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;

    this.데이터수 += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.insert(2, 1000);
console.log(l.length());
console.log(l.toString());
console.log(l.fullData);
