import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function LoginComponent() {
    return (
        <div >
            <h1>Time to Login!</h1>
            <div >
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" name="login">login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent


