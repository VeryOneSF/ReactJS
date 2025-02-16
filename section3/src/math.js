// math 모듈
function add(a, b) {
    return a + b;
}

function sub(a, b){
    return a - b;
}


// common JS 방식
// module.exports = {
//     add, 
//     sub
// }

// ESM 방식
export {add, sub}

