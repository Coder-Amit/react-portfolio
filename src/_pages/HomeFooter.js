import React from 'react'
import { ArrowRight16Filled } from "@fluentui/react-icons"
import { Github, Instagram, LinkedIn } from '../icons/Icons'
import { Link, useLocation } from 'react-router-dom'

function HomeFooter() {
    const location = useLocation();
    return (<>
        <div div className='pageFooter'>
            <div className='footerRight'>
                <span></span>
                <Github />
                <Instagram />
                <LinkedIn />
            </div>
            <div className='footerLeft'>
                {location.pathname === '/' && <Link to="/skills">
                    <span>
                        <ArrowRight16Filled className='footerLeftIcon' />
                        &nbsp;
                        Skills
                    </span>
                </Link>}
                {location.pathname === '/skills' && <Link to="/exp">
                    <span>
                        <ArrowRight16Filled className='footerLeftIcon' />
                        &nbsp;
                        Experiance
                    </span>
                </Link>}
                {location.pathname === '/exp' && <Link to="/projects">
                    <span>
                        <ArrowRight16Filled className='footerLeftIcon' />
                        &nbsp;
                        Project
                    </span>
                </Link>}

            </div>
            <div className='footerMobile'>
                <Link to="/skills">
                    <span>
                        <ArrowRight16Filled className='footerLeftIcon' />
                        &nbsp;
                        Skills
                    </span>
                </Link>
            </div>
        </div>
    </>

    )
}

export default HomeFooter

export const SkillSlider = () => {
    return <>
        <span className='leftTrigger'></span>
        <div className='skill-slider'>
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
            <img className='skills-icons' src='/redux.png' />
        </div>
        <span className='rightTrigger'></span>
    </>

}