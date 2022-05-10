import React, { useState } from 'react'

// import '../scss/'
import MobileNav from './MobileNav';


import About from '../pages/About';

const Header = () => {
    // const [toggleActive, SetToggleActive] = useState()
    const [nav, setNav] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    const toggleActive = (val) => {
        setNav(val)
    }

    return (
        <div>
            <MobileNav open={isOpen} />
            {/* <div className='header'>
                <div className='hide-for-mobile'>
                    <div className={nav === 1 ? 'header__home panel active' : 'header__home panel'} onClick={() => toggleActive(1)}>
                        <About />
                    </div>

                    <div className={nav === 2 ? 'header__food panel active' : 'header__food panel'} onClick={() => toggleActive(2)}>
                        <h1>Food</h1>
                    </div>

                    <div className={nav === 3 ? 'header__retail panel active' : 'header__retail panel'} onClick={() => toggleActive(3)}>
                        <h1>Retail</h1>
                    </div >

                    <div className={nav === 4 ? 'header__community panel active' : 'header__community panel'} onClick={() => toggleActive(4)}>
                        <h1>Community</h1>
                    </div>
                </div>
            </div> */}
        </div >
    )
}

export default Header