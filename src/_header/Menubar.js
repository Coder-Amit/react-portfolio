import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './menubar.css'
import MenuMobile from './MenuMobile'

function Menubar() {
    const navItem = [
        { name: "Home", urlTarget: '/' },
        { name: "Skills", urlTarget: '/skills' },
        { name: "Project", urlTarget: '/projects' },
        { name: "Contact", urlTarget: '/contact' },
    ]
    const [activeState, setState] = useState('Home')

    useEffect(() => {

    }, [])

    return (
        <header className='_menubar'>
            <div className='_menuLeft'>
                <div className='headerImg' src='/webDevOutLine.svg' >A.</div>
            </div>
            <div className='_menuRight'>
                <div className='_menuRight_nav'>
                    {navItem.map((item, index) => {
                        if (item.name === activeState) {
                            return <a className='active' onClick={() => setState(item.name)} key={index} href={item.urlTarget}>{item.name}</a>
                        } else {
                            return <a onClick={() => setState(item.name)} key={index} href={item.urlTarget}>{item.name}</a>
                        }
                    })}
                </div>
            </div>
            <div className='_menuEnd'></div>
            <MenuMobile />
        </header>
    )
}

export default Menubar