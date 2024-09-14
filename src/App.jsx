import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {useRecoilValue, RecoilRoot, useSetRecoilState} from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'; 

function App() {
  return (
   
      <div>
         <RecoilRoot>
          <Count></Count>
         </RecoilRoot>
      </div>
    )

    function Count() { 
      console.log("re-render count render")
      return <div>
        <CountRenderer></CountRenderer>
        <Buttons/>
        <CheckEven></CheckEven>
        
      </div>
    }
  function CountRenderer(){
    const count = useRecoilValue(countAtom)
    
    return <div>
      {count}
    </div>
  }

  function Buttons(){
    console.log("re-render")
    const setCount = useSetRecoilState(countAtom)

    return <div>
      <button onClick={() =>{
        setCount(c => c + 1)
      }}>
        Increase
      </button >

      <button onClick={() =>{
         setCount(c => c - 1)
      }}>
        Decrease
      </button>
    </div>
  }

  function CheckEven(){
    console.log("Even block get called")
    const count = useRecoilValue(evenSelector)

    return <div>
      {(count == 0) ? "It is even" : ""}
    </div>
  }
}

export default App
