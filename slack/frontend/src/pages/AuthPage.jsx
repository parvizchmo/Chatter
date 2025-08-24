import React from 'react'
import "../styles/auth.css"

import {SignInButton} from "@clerk/clerk-react";

const AuthPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-left">
                <div className='auth-hero'>
                    <div className='brand-container'>
                        <img src="/Logo.png" alt="Chatter" className="brand-logo"/>
                        <span className='brand-name'>Chatter</span>
                    </div>
                    <h1 className='hero-title'>Where Work Happens</h1>

                    <p className='hero-subtitle'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi et
                        eum ex modi nobis quas quibusdam veniam veritatis! Accusamus ad assumenda corporis deserunt eius
                        nam nemo, nulla quas quo vel!</p>
                    <div className='features-list'>
                        <div className='feature-item'>
                            <span className='feature-icon'>1</span>
                            <span>Real-time Messaging</span>
                        </div>
                        <div className='feature-item'>
                            <span className='feature-icon'>2</span>
                            <span>Video</span>
                        </div>
                        <div className='feature-item'>
                            <span className='feature-icon'>3</span>
                            <span>Chat maybe</span>
                        </div>
                    </div>

                    <SignInButton mode='modal '>
                        <button className='cta-button'>
                            Get Started
                        </button>
                    </SignInButton>
                </div>
            </div>
            <div className="auth-right">
                <div className='auth-image-container'>
                    <img src="/Logo.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default AuthPage
