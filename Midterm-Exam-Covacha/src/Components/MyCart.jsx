import React,{useState} from 'react'

export const MyCart = () => {
    const [cart, setCart] = useState([])

  return (
    <>
        <input type="text" name="cart" id="cart" />
        <button >Add to Cart</button>
    </>
  )
}
