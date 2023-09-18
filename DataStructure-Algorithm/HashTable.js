class HashTable {  // 해시 테이블 생성
  constructor(size) {  // 해시 테이블의 크기를 지정하는 생성자 함수
    this.table = new Array(size)  // 특정 크기의 배열을 생성하여 해시 테이블로 사용
    this.size = size  // 해시 테이블의 크기를 저장
  }

  
  hash(key) {  // 문자열 키를 해시 값으로 변환
    let total = 0
    for(let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)  // 문자열의 각 문자를 ASCII 코드로 변환
    }
    return total % this.size
  }

  
  set(key, value) {  // 해시 테이블에 키-값 쌍을 추가
    const index = this.hash(key)
    this.table[index] = value  // 해당 인덱스에 값을 저장
  }

  
  get(key) {  // 주어진 키에 대응하는 값을 반환
    const index = this.hash(key)
    return this.table[index]  // 해당 인덱스에 저장된 값을 반환
  }

  
  remove(key) {  // 주어진 키에 대응하는 값을 삭제
    const index = this.hash(key)
    this.table[index] = undefined  // 해당 인덱스의 값을 삭제
  }

  
  display() {  // 해시 테이블의 내용을 화면에 출력
    for(let i = 0; i < this.table.length; i++) {
      if(this.table[i]) {
        console.log(i, this.table[i])  // 인덱스와 해당 값을 출력
      }
    }
  }
}

const table = new HashTable(50)  // 크기가 50인 해시 테이블을 생성

table.set("name", "Bruce")
table.set("age", 25)
table.display()

console.log(table.get("name"))

table.set("mane", "Clark")
table.display()