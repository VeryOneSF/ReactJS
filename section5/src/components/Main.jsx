import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음.
// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링됨. (객체도 렌더링 불가)
// 3. 모든 태그는 닫혀있어야 함.
// 4. 최상위 태그는 반드시 하나여야만 함.
//  - <></> : 최상위 태그로 빈태그로 설정해도 JSX에서는 정상적으로 최상위태그로 인식
//     다만, 브라우저에서 렌더링될 때에는 감싸져 있는 태그 없이 빈태그로 감싸져 있는 태그들이 흩뿌려져있음.
const Main = () =>{
    const user = {
        name:"홍길동",
        isLogin : true,
    };

    if(user.isLogin){
        return <div className="logout">logout</div>
    }else{
        return <div>login</div>
    }

//     return(
//         <main>
//             {user.isLogin ? (
//                 <div>Logout</div>
//             ) : (
//                 <div>Login</div>
//             )}
//         </main>
//     )
// 
}

export default Main;