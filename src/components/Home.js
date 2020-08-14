import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/calculator'><li>Calculator</li></Link>
                    <li>Documentation</li>
                </ul>
            </nav>

            <div className="home-page">
                <h1>Budget Calculator</h1>
                <p>This calculation app provides users the ability to input certain perameters to calculate and output a timeframe of when they will be able to afford an item</p>
            </div>

        </div>
    )
}

export default Home
