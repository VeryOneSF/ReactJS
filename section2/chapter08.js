// 5가지 요소 순회 및 탐색 메서드 
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr){
    // console.log(idx, item*2)
})

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
})

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(2)

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
// 찾으려는 요소가 없으면 -1 반환
// 찾으려는 요소가 여러 개라면 가장 먼저 발견되는 요소의 인덱스 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

let objectArr = [
    {age : 24}, 
    {age : 35}
]

// console.log(objectArr.indexOf({age : 24})) // -1 : 얕은 비교 (참조값을 기준으로 비교)
objectArr.findIndex(
    (item) => item.age === 24              // 프로퍼티로 비교 가능
)

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//     if(item % 2 !== 0) return true;
// });

const findedIndex = arr4.findIndex(
    (item) => item === 2
);
console.log(findedIndex)

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {age : 24}, 
    {age : 35}
]

const finded = arr5.find((item) => item.age === 24)
console.log(finded) // {age : 24}