import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect, useRef} from 'react'
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  const onClickButton = (value) =>{
    setCount(count + value)
  }

  // 1. 마운트 : 탄생
  // deps의 영향을 받기 때문에 빈 배열인 경우 컴포넌트 생성에만 실행
  useEffect(()=>{
    console.log("mount")
  }, [])

  // 2. 업데이트 : 리렌더링
  // deps 생략 : 업데이트가 발생할 때마다 동동작하게 됨
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  // 3. 언마운트 : 죽음 -> 최적화 작업



  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input 
          value={input} 
          onChange={(e)=>{
            setInput(e.target.value)
          }}/>
      </section>
      <section>
        <Viewer count = {count}/>
        {count % 2 === 0 ? <Even/>: null}
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>

    </div>
  )
}

export default App
