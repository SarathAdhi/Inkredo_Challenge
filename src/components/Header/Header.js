import React, { useState } from 'react'
import './header.css'

export default function Header() {
    const [isOpen, setIsopen] = useState(false)
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <h2>BB Fan</h2>
                </div>
                <div className='header-links'>
                    <a href='/'>HOME</a>
                    <a href='/episodes'>EPISODES</a>
                    <a href='/quotes'>QUOTES</a>
                </div>
                <img onClick={() => setIsopen(!isOpen)} className='mobile-btn' src={require('../../assets/menu-btn.gif')} alt='' />
                {isOpen && (
                    <div className='mobile-navbar'>
                        <a href='/'>HOME</a>
                        <a href='/episodes'>EPISODES</a>
                        <a href='/quotes'>QUOTES</a>
                    </div>
                )}
            </div>
        </div>
    )
}
