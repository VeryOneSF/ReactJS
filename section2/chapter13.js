// Promise란?
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 3가지 상태 (대기(pending), 성공(fulfilled), 실패(rejected) / 해결(resolve), 거부(reject))

function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수 : executor
        setTimeout(() => {
    
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject("num이 숫자가 아님")
            }
    
        }, 2000);
    
    });

    return promise;
    
}

// then 메서드 (그 후에) : 성공 시에만 호출되는 메서드
promise.then((value)=>{
    console.log("promise 처리 후 : " + value)
})

promise.catch((error)=>{
    console.log((error))
})

// promise chaining
promise
    .then((value)=>{
    console.log("promise 처리 후 : " + value)
    })
    .catch((error)=>{
        console.log(error)
    })

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    newP.then((result)=>{
        console.log(result);
    })
})

// 위와 같이 코드를 작성하게 되면, 콜백 지옥 발생
add10(0)
.then((result) => {
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
    return add10(undefined)
}).then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error)
})