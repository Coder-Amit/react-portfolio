import React from 'react'
import './home.css'
import {
    ArrowStepInRight24Filled
} from '@fluentui/react-icons'

function Home() {
    return (
        <div className='_home'>
            <div className='_profile'>
                <p className='_profile-fName'>Amit</p>
                <p className='_profile-lName'>Mishra.</p>
                <p className='_profile-Skill'></p>
                <img className='_profileImage' src='amit-mishra.png' />
            </div>
            <div className='_intro'>
                <p className='hi'>Hi,</p>
                <p className='hi_1'>I build things for <br />web.</p>
                <p className='hi_2'>
                    I'm a software engineer specializing in frontend technologies like react, redux, syncfusion, fluentUI, etc.
                    Currently, I am focused on building accessible, human-centric AI led platform at <span>Hloov</span>.
                </p>
                <p className='hi_34'>
                    <a className='hi_3' href="mailto: amitm780@gmail.com">E: amitm780@gmail.com</a>
                    <a className='hi_4' href="tel:+918299488839">P: 8299488839</a>
                </p>
            </div>
        </div>
    )
}

export default Home