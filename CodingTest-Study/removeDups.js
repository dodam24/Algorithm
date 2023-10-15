/*
  비정렬 연결 리스트에서 중복 문자를 제거하는 코드를 작성하라. (임시 버퍼가 허용되지 않는 상황에서의 해결 방법도 알아보자)
  input: 1 -> 1 -> 2 -> 2 -> 3
  output: 1 -> 2 -> 3
*/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(3);


// Solution 코드
function removeDups(head) {  // 한 번에 두 노드를 비교 -> 포인터 2개 필요
  let curr = head;  // curr: 현재 노드를 담당
  while(curr) {
    let runner = curr;  // runner: 현재 노드의 다음 노드를 담당
    while(runner.next) {
      if(runner.next.val === curr.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    curr = curr.next;
  }
  return head;
}

// Helper 함수
function print(node) {
  const values = [];

  while(node) {
    values.push(node.val);
    node = node.next;
  }
  console.log(values.join(" -> "));
}


print(head);  // 처리 전
console.log(
  removeDups(head)  // Solution 코드 실행
)
print(head);  // 처리 후