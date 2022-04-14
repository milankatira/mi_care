import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div>
            <h3>Home</h3>
            <Link to='/dashboard'>go to Dashboard</Link>
        </div>
    )
}

export default HomeScreen
