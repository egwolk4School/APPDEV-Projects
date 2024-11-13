import React, { useState } from 'react';

export default function Shop(props) {
    const shopItems = props.items;
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [amountPaid, setAmountPaid] = useState(0);  
    const [showReceipt, setShowReceipt] = useState(false);  

    
    function AddItem(item) {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            calculateTotal(updatedCart); 
            return updatedCart;
        });
    }

    
    function calculateTotal(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price; 
        }
        setTotal(total);  
    }

   
    function handlePayment() {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to your cart before proceeding with the payment.");
        } else if (amountPaid >= total) {
            setShowReceipt(true);  
        } else {
            alert("Insufficient payment. Please pay the full amount.");
        }
    }

    function startNewCart() {
        setCart([]);           
        setTotal(0);            
        setAmountPaid(0);       
        setShowReceipt(false);  
    }

    const renderItems = () => {
        return shopItems.map((item) => (
            <div key={item.id} className='shopItems'>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
                <button onClick={() => AddItem(item)}>Add to Cart</button>
            </div>
        ));
    };

    const renderCart = () => {
        return cart.map((item) => (
            <div key={item.id}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
            </div>
        ));
    };

    const calculateChange = () => {
        return amountPaid - total;
    };

    const renderReceipt = () => {
        return (
            <div>
                <h4>Receipt:</h4>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
                <p>Total: ${total}</p>
                <p>Amount Paid: ${amountPaid}</p>
                <p>Change: ${calculateChange() >= 0 ? calculateChange() : 0}</p>
            </div>
        );
    };

    return (
        <>
            <div className="container">
                <div className="shop">
                    <h4>Shop:</h4>
                    <ul>{renderItems()}</ul>
                </div>
                <div className="cartTotal">
                   <div className="cart">
                        <h4>Cart:</h4>
                            {cart.length > 0 ? (
                                <ul>{renderCart()}</ul>
                            ) : (
                                <ul>
                                    <p>There are no items in the cart!</p>
                                </ul>
                            )}
                   </div>

                    <div className="total">
                        <h4>Total:</h4>
                        {total > 0 ? (
                            <p>${total}</p>
                        ) : (
                            <p>$0</p>
                        )}
                        <div className='prompt'>
                            <input
                                type="number"
                                placeholder="Enter amount paid"
                                value={amountPaid}
                                onChange={(e) => setAmountPaid(parseFloat(e.target.value))}
                            />
                            <button onClick={handlePayment}>Pay</button>
                        </div>
                    </div>

                </div>
                
            </div>

            

            {showReceipt && renderReceipt()}

            {showReceipt && (
                <div>
                    <button onClick={startNewCart}>OK</button>
                </div>
            )}
        </>
    );
}
