import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menubar.css'
import MenuMobile from './MenuMobile'
export const navItem = [
    { name: "Home", urlTarget: '/' },
    { name: "Skills", urlTarget: '/skills' },
    { name: "Experiance", urlTarget: '/exp' },
    { name: "Project", urlTarget: '/' },
    { name: "Contact", urlTarget: '/contact' },
]
function Menubar() {

    const location = useLocation()
    const [activeState, setState] = useState('')

    useEffect(() => {
        if (location.pathname === "/") {
            setState("Home")
        }
        if (location.pathname === "/skills") {
            setState("Skills")
        }
        if (location.pathname === "/exp") {
            setState("Experiance")
        }
        if (location.pathname === "/contact") {
            setState("Contact")
        }
    }, [location.pathname])

    return (
        <header className='_menubar'>
            <div className='_menuLeft'>
                <div className='headerImg' src='/webDevOutLine.svg' ><a href='/'>A.</a></div>
            </div>
            <div className='_menuRight'>
                <div className='_menuRight_nav'>
                    {navItem.map((item, index) => {
                        if (item.name === activeState) {
                            return <Link className='active' onClick={() => setState(item.name)} key={index} to={item.urlTarget}>{item.name}</Link>
                        } else {
                            return <Link onClick={() => setState(item.name)} key={index} to={item.urlTarget}>{item.name}</Link>
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