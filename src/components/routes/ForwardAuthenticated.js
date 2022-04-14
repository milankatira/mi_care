import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
const ForwardAuthenticated = () => {
    return (
        <React.StrictMode>
        <LoginScreen />
      </React.StrictMode>
    )
}

export default ForwardAuthenticated
