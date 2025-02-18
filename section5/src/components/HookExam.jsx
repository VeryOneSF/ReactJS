import useInput from "../hooks/useInput"

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없음

// const state = useState(); -> 에러 발생 : 함수 컴포넌트 내부에서만 호출 가능능

const HookExam = () => {
    const [input, onChangeInput] = useInput();

    return (
        <div>
            <input 
                value={input} 
                onChange={onChangeInput}
            />
            {input}
        </div>
    )
}

export default HookExam;