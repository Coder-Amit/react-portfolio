import React from 'react'
import './menubar.css'
import MenuMobile from './MenuMobile'

function Menubar() {
    return (
        <header className='_menubar'>
            <div className='_menuLeft'>
                <img className='headerImg' src='/webDevOutLine.svg' />
            </div>
            <div className='_menuRight'>yy</div>
            <MenuMobile />
        </header>
    )
}

export default Menubar