import React,{useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const decrement =()=>{
        setCount(c=>c-2)
    }
    const increment =()=>{
        setCount(c=>c+2)
    }
  return (
    <>
        <p>{count}</p><br />
        <button onClick={decrement}>decrement by 2</button>&nbsp;<button onClick={increment}>increment by 2</button>
    </>
  )
}
