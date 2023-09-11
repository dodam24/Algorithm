class Node {
  constructor(data) {
    this.data = data;
    // this.child = []; // 이진트리가 아닌 트리가 됨
    this.left = null;
    this.right = null;
  }
}

class Tree {
  construnctor(data) {
    let init = new Node(data); // init 인스턴스를 생성하고, 입력받은 data를 초기화
    this.root = init;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data === 순회용현재노드.data) {
        return;
      }
      if (data < 순회용현재노드.data) {
        if (!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          this.데이터수 += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      }
      if (data > 순회용현재노드.data) {
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          this.데이터수 += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }
  }


  // 깊이 우선 탐색, DFS(Depth First Search)
  // Stack 이용!
  DFS() {
    let 결과값 = [];
    let 스택 = [this.root];

    while (스택.length !== 0) {
      let current = 스택.pop();
      if (current.right) {
        스택.push(current.right);
      }
      if (current.left) {
        스택.push(current.left);
      }
      결과값.push(current.data);
    }
    return 결과값;
  }


  // 너비 우선 탐색, BFS(Breadth First Search)
  // Queue 이용!
  BFS() {
    let 결과값 = [];
    let 큐 = [this.root];

    while (큐.length !== 0) {
      let current = 큐.shift();
      if (current.left) {
        큐.push(current.left)
      }
      if (current.right) {
        큐.push(current.right)
      }
      결과값.push(current.data)
    }
    return 결과값;

  }
}