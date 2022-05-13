import React, { useState } from 'react'

import logo from '../../assets/logo.svg';
import menu from '../../assets/icon-menu.svg'
import MobileNav from './MobileNav';

const HeaderStrip = () => {
    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
    }

    return (

        <div>
            <header className='main__header'>
                <div className='main__header-logo'>
                    <img src={logo} alt='Logo' />
                </div>

                <div className='main__header-menu hide-for-desktop' onClick={() => setActive(true)}>
                    <img src={menu} alt='Logo' />
                </div>


            </header>
            <MobileNav active={active} func={toggle} />
        </div>
    )
}

export default HeaderStrip