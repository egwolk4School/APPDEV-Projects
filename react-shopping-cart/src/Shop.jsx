import React,{useState} from 'react'
import Login from './Login'
export default function Shop(props) {
    let shopItems = props.items
    const [cart, setCart] = useState([])

    function AddItem(item) {
        setCart(c=>[...c,item])
    }

    const renderItems =()=>{
        return(
            shopItems.map((item)=>{
                return(
                    <>
                        <li key={item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <button onClick={()=>AddItem(item)}>Add to Cart</button>
                    </>
                )
            })
        )
    }

    const renderCart =()=>{
        return(
            cart.map((item)=>{
                return(
                    <>
                        <li key={item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <br />
                    </>
                )
            })
        )
    }

    
    if(props.isLoggedIn === false){
        return <Login/>
    }else{
        return (
            <>
                <h4>This is The Shop: </h4>
                <ul>{renderItems()}</ul>
                <br />
                <h4>Cart Items:</h4>
                {cart.length>0
                ?<ul>{renderCart()}</ul>
                :<ul>
                    <li>There are no items in the cart!</li>
                </ul>}
            </>
          )
    }
  
}
