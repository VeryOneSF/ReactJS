// 1. Spread 연산자
// - "흩뿌리다, 펼치다"
// - 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할


// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2)

// 객체
let obj1 = {
    a : 1,
    b :2
}

let obj2 = {
    c : 3, 
    ...obj1, 
    d : 4
}

console.log(obj2)

// 함수
function funcA(p1, p2, p3){
    console.log(p1, p2, p3)
}

funcA(...arr1)

// 2. Rest 매개변수
// - "나머지", 나머지 매개변수
// rest 매개변수가 항상 마지막에 와야 함.
// 매개변수를 배열에 담아서 반환

function funcB(...rest){
    console.log(rest); 
}

funcB(obj1);

