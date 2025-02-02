// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "홍길동", age : 24},
    {name : "강길동", age : 24},
    {name : "임길동", age : 44}
]
const people = arr1.filter(
    (item) => item.age === 24
)

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map((item) => item.name);
// console.log(names) // ['홍길동', '강길동', '임길동']

// 3. sort
// 배열을 사전순을 정렬하는 메서드
let arr3 = [10, 2, 3, 4];
arr3.sort((a, b) => {
    if(a > b) { // b가 a 앞
        return 1;
    }else if (b > a) { // a가 b 앞
        return -1;
    }else { // a 와 b 자리 그대로 유지
        return 0;
    }
});


// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드 
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined) // hi im winterlood