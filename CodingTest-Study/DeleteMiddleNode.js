/*
  단방향 연결리스트가 주어졌을 때, 중간에 있는 노드 하나를 삭제하는 알고리즘을 작성하라.
  단, 삭제할 노드에만 접근할 수 있다.

  a -> b -> c -> d -> e
  input: c
  output: a -> b -> d -> e
*/


const { Node, print } = require('./node.js');

let A = new Node('a');
let B = new Node('b');
let C = new Node('c');
let D = new Node('d');
let E = new Node('e');

A.next = B;
B.next = C;
C.next = D;
D.next = E;


print(A); // 처리 전

function deleteMiddleNode(node) {
  if(!node || !node.next) {
    return;
  }
  node.val = node.next.val;
  node.next = node.next.next;
}


console.log(
  deleteMiddleNode(C)  // a -> b -> d -> e
)

print(A); // 처리 후