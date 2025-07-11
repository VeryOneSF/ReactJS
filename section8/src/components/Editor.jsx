import './Editor.css'
import { useRef, useState } from 'react'

const Editor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) onSubmit();
    }

    const onSubmit = () => {
        if(content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("")
    }

    return (
        <div className="Editor">
            <input ref={contentRef} value={content} 
            onKeyDown={onKeyDown}
            onChange={onChangeContent} placeholder="새로운 할 일 추가"/>
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default Editor;