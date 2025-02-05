console.log(1); // 1번으로 실행

setTimeout(() => { // 2번으로 실행
    console.log(2)
}, 3000) // 3초를 세는 타이머가 시작 -> 3초 지나고 난 뒤에 콜백함수 실행

console.log(3); // 3번으로 실행