import Reviews from './Reviews'
import React,{useState} from 'react'
import './Login.css'
export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [enteredUsernames, setEnteredUsernames] = useState('')
    const [enteredPasswords, setEnteredPasswords] = useState('')
    function getUsername(event) {
        setEnteredUsernames(event.target.value)
    }
    function getPassword(event) {
        setEnteredPasswords(event.target.value)
    }

    const accounts = {
        username: "admin",
        password: "admin"
    }
    const renderLoginForm = () => {
        return(
            <div className='login'>
            <h1>Welcome to Wormmmy's Reviews!</h1><br />
            <h4>Login to Continue:</h4><br />
            Username: 
            <input type="text" name="username" id="username" onChange={getUsername} />
            <br />
            {/* <p>{userName}</p> */}
            <br />
            Password:
            <input type="password" name="password" id="password" onChange={getPassword}/>
            <br />
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }
    function handleLogin() {
        if(accounts.username===enteredUsernames && accounts.password ===enteredPasswords){
            setIsLoggedIn(true)
        }
        else{
            alert('invalid username or password')
        }
        
    }
    const renderReviews=()=>{
        return(
            <Reviews isLoggedIn={isLoggedIn} accounts={accounts}/>
        )
    }
    if(isLoggedIn === false){
        return renderLoginForm()
    }else{
        return renderReviews()
    }
}