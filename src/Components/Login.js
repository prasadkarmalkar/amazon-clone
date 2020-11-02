
import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
               alert(auth);
                history.push('/')
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                console.log(auth);
                history.push('/')
            }
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG7.png' />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <p>Email Address: </p>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <p>Password: </p>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button onClick={signIn}>Sign In</button>
                    <p className="login__dummytext">If you don't have account you can create it by clicking below button</p>
                    <button onClick={signUp}>Create New Account</button>
                </form>

            </div>

        </div>
    )
}

export default Login
