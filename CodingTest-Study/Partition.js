/*
  분할(Partition): 값 x가 주어졌을 때 x보다 작은 노드들을 x보다 크거나 같은 노드들보다 앞에 오도록 하는 코드를 작성하라.
  만약 x가 리스트에 있다면 x는 그보다 작은 원소들보다 뒤에 나오기만 하면 된다.
  즉, 원소 x는 '오른쪽 그룹' 어딘가에만 존재하면 된다. 왼쪽과 오른쪽 그룹 사이에 있을 필요는 없다.

  input: 1 -> 4 -> 3 -> 2 -> 5 -> 2,   x = 3
  output: 1 -> 2 -> 2 -> 4 -> 3 -> 5
*/

// time: O(n), space: O(1)
const { Node, print } = require('./node.js');

let head = new Node(1);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(2);



function partition(head, x) {
  let dummyLeft = new Node(null)  // 시작 지점의 가상 노드는 값이 비어있음. 연결하기 위한 시작점 역할만을 수행
  let dummyRight = new Node(null)
  let leftP = dummyLeft;  // leftPoint가 dummyLeft를 가리키도록 설정
  let rightP = dummyRight;  // rightPoint가 dummyRight를 가리키도록 설정
  while(head) {

    if(head.val < x) {  // 현재 노드가 x보다 작은 경우
      leftP.next = head;  // 왼쪽 포인터를 활용
      leftP = leftP.next;  // 왼쪽 포인터를 한 칸씩 전진
    } else {
      rightP.next = head;  // 현재 노드가 x보다 큰 경우, 오른쪽 포인터를 활용
      rightP = rightP.next;  // 오른쪽 포인터를 한 칸씩 전진
    }

    head = head.next;
  }

  // 왼쪽 그룹(dummyLeft)과 오른쪽 그룹(dummyRight)을 연결
  leftP.next = dummyRight.next;  // 왼쪽 포인터의 다음 노드를 오른쪽 가상 노드의 다음 노드로 연결
  rightP.next = null;  // 오른쪽 포인터의 다음 노드를 null값으로 끊어주지 않으면 원형 리스트처럼 값이 계속해서 반복될 수 있음
  
  return dummyLeft.next;  // output의 시작 지점의 노드를 반환
}


print(head);  // 실행 전
partition(head, 3)
print(head);  // 실행 후