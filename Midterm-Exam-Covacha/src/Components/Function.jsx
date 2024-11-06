import React,{useState} from 'react'

export const Function = () => {
    const [count, setCount] = useState(0)
    const update =()=>{
        if (count%2==0){
            setCount(c=>(c+1)*2)
        }else{
            setCount(c=>(c+1)+1)
        }
    }

  return (
    <>
        <p>{count}</p><br />
        <button onClick={update}>Update Number</button>
    </>
  )
}
