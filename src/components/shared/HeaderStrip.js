import React from 'react'

import logo from '../../assets/logo.svg';
import menu from '../../assets/icon-menu.svg'

function HeaderStrip() {
    return (
        <header className='main__header'>
            <div className='main__header-logo'>
                <img src={logo} alt='Logo' />
            </div>

            <div className='main__header-menu hide-for-desktop'>
                <img src={menu} alt='Logo' />
            </div>
        </header>
    )
}

export default HeaderStrip