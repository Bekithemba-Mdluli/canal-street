import React from 'react'

import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import close from '../../assets/icon-close.png';

const MobileNav = ({ open }) => {
    return (
        <header className='hide-for-desktop hide'>
            <div className={open ? 'header__container' : 'header__container'}>
                <div className='close'>
                    <img src={close} alt='Close icon' />
                </div>
                <ul>
                    <li><a href='/about'><span>About</span></a></li>
                    <li><a href='/food'><span>Food</span></a></li>
                    <li><a href='/retail'><span>Retail</span></a></li>
                    <li><a href='/community'><span>Community</span></a></li>
                </ul>

                <div className='nav__container'>
                    <div className='header__container-btn'>
                        <a href='/'>become a vendor</a>
                    </div>

                    <div className='header__container-p'>
                        <p>265 Canal Street</p>
                        <p>New York, New York</p>
                    </div>

                    <div className='header__container-p'>
                        <p>Food Hall Hours:</p>
                        <p>Mon &mdash; Sun: 10AM&mdash; 10PM</p>
                    </div>

                    <div className='header__container-p'>
                        <p>Retail Market Hours:</p>
                        <p>Mon &mdash; Sat: 11AM&mdash; 7PM</p>
                        <p>Sun: 11AM-6PM</p>
                    </div>

                    <div className='header__container-a'>
                        <a href='/'>Email us</a>
                    </div>

                    <div className='header__container-social'>
                        <div className='header__container-social-icon'>
                            <a href='/'><img src={facebook} alt='Facebook icon' /></a>
                        </div>

                        <div className='header__container-social-icon'>
                            <a href='/'><img src={instagram} alt='Instagram icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MobileNav