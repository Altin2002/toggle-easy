import React, { useState } from 'react'
import './Toggle.css'

const ToggleComp = () => {
    const [open, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!open)
    }

    return (
        <div className='content'>
            <div className='toggle' onClick={toggleOpen}>
                Why park a domain name in Parkname? {open ? '▲' : '▼'}
            </div>
            {open && (
                <div className='toggle-open'>
                    Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.
                </div>
            )}
        </div>
    )
}

export default ToggleComp