import React from 'react'
import './home.css'

function Home() {
    return (
        <div className='_home'>
            <div className='_profile'>
                <p className='_profile-fName'>Amit</p>
                <p className='_profile-lName'>Mishra</p>
                <img className='_profileImage' src='amit-mishra.png' />
            </div>
            <div className='_intro'></div>
        </div>
    )
}

export default Home