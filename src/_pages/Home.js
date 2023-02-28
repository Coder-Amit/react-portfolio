import React from 'react'
import './home.css'
import {
    ArrowStepInRight24Filled
} from '@fluentui/react-icons'
import HomeFooter from './HomeFooter'
import { useLocation } from 'react-router-dom'
import { Skills } from './Skills'
import Experience from './Experience'
import Contact from './Contact'

function Home() {
    const location = useLocation()
    return (<>
        <div className='_home'>
            {location.pathname === '/' && <div className='_profile'>
                <p className='_profile-fName'>Amit</p>
                <p className='_profile-lName'>Mishra.</p>
                <p className='_profile-Skill'></p>
                <img className='_profileImage' src='amit-mishra.png' />
            </div>}
            {location.pathname === "/skills" && <Skills />}
            {location.pathname === "/exp" && <div style={{ padding: '2rem' }}><Experience /></div>}
            {location.pathname === '/contact' && <div style={{ padding: '2rem' }}><Experience /></div>}
            <div className='_intro'>

                {location.pathname === '/' && <>
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
                </>}
                {location.pathname === '/skills' && <div style={{ opacity: '0.5', height: "100%" }}><Experience /></div>}
                {location.pathname === '/exp' && <p>Comming soon...</p>}
                {location.pathname === '/contact' && <Contact />}
            </div>


        </div>
        <HomeFooter />
    </>
    )
}

export default Home