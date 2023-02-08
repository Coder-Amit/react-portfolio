import React from 'react'
import { ArrowRight16Filled } from "@fluentui/react-icons"
import { Github, Instagram, LinkedIn } from '../icons/Icons'

function HomeFooter() {
    return (<>
        <div div className='pageFooter'>
            <div className='footerRight'>
                <span></span>
                <Github />
                <Instagram />
                <LinkedIn />
            </div>
            <div className='footerLeft'>
                <span>
                    <ArrowRight16Filled className='footerLeftIcon' />
                    &nbsp;
                    Skills
                </span>
            </div>
            <div className='footerMobile'>
                <span>
                    <ArrowRight16Filled className='footerLeftIcon' />
                    &nbsp;
                    Skills
                </span>
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