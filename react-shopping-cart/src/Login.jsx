import React,{useState} from 'react'
import Shop from './Shop'
import AdminPanel from './AdminPanel'

export default function Login() {
    let items =[
        {id:1, name:'Item 1', price:10},
        {id:2, name:'Item 2', price:15},
        {id:3, name:'Item 3', price:20},
      ]

    let accounts = [
        {id:1, username:'customer', password:'customer', role:'customer'},
        {id:2, username:'customer1', password:'customer1', role:'customer'},
        {id:3, username:'customer2', password:'customer2', role:'customer'},
        {id:4, username:'admin', password:'admin', role:'admin'}
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [roles, setRoles] = useState('')
    const [enteredUsernames, setEnteredUsernames] = useState('')
    const [enteredPasswords, setEnteredPasswords] = useState('')

    function getUsername(event) {
        setEnteredUsernames(event.target.value)
    }
    function getPassword(event) {
        setEnteredPasswords(event.target.value)
    }
    const renderLogin = () =>{
        return(
            <div>
                <h1>Login:</h1>
                Username: <input type="text" placeholder='username' id='username' onChange={getUsername}/>  
                Password:  <input type="password" placeholder='password' id='password' onChange={getPassword}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

    function handleLogin() {
        accounts.map((account)=>{
            if(account.username===enteredUsernames && account.password ===enteredPasswords){
                setIsLoggedIn(true)
                setRoles(account.role)
            }
        })
        
    }

    const renderShop=()=>{
        return(
            <Shop isLoggedIn={isLoggedIn} items={items}/>
        )
    }

    const renderAdmin =()=>{
        return(
            <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts}/>
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    }else{
        if(roles=='customer'){
            return renderShop()
        }
        else{
            return renderAdmin()
        }
    }


}
