const Button= ({children, text, color = "black"}) => {
    // props에 기본값을 설정하기 위해서는 구조분해할당을 활용하여 설정할 것 
    // 이벤트 객체 e
    const onclickButton = (e) => {
        console.log(e)
        console.log(text, color)
    }

    return (
        <button 
        style={{color:color}} 
        onClick={onclickButton}
        // onMouseEnter={onclickButton}
        >
            {text} - {color}
            {children}
        </button>
    )
}

export default Button;