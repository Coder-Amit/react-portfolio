import React from 'react'
import { MailArrowUp20Regular, Phone20Regular } from "@fluentui/react-icons"
import './contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-item'>
                <span className='contact-type'><MailArrowUp20Regular /></span>
                <span className='contact-details'>
                    <a href="mailto: amitm780@gmail.com">amitm780@gmail.com
                    </a>
                </span>
            </div>
            <div className='contact-item'>
                <span className='contact-type'><Phone20Regular /></span>
                <span className='contact-details'>
                    <a href="tel:+918299488839">+91 8299488839</a>
                </span>
            </div>




        </div>
    )
}

export default Contact