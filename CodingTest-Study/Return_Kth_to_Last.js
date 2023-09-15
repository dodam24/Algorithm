/*
단방향 연결리스트에서, 뒤에서 k번째 원소를 찾는 알고리즘을 구현
input: a->b->c->d->e, k=3
output: c
*/

const Node = require('./node.js');

let head = new Node('a');
head.next = new Node('b');
head.next.next = new Node('c');
head.next.next.next = new Node('d');
head.next.next.next.next = new Node('e');


// 1. n(리스트의 길이) 구하기
// 2. n-k 계산해서 노드 위치 구하기
// 시간복잡도: O(n)
// 공간복잡도: O(1)

function kThToLast(head, k) {
  let n = 0;
  let temp = head;
  while(temp) {
    n++;
    temp = temp.next; // 앞으로 한 칸씩 전진
  }
  let pos = n-k;
  while(pos && head) {
    pos--;
    head = head.next;
  }
  return head;
}

console.log(
  kThToLast(head, 3),
    kThToLast(head, 2)
)