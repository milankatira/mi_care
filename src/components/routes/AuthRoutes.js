import React from 'react'
import { Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const AuthRoutes = () => {

    return (
        <>
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/signup' component={SignUpScreen} />
        </>
    )
}

export default AuthRoutes
