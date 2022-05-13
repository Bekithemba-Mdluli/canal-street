import React from 'react'
import logo from '../assets/logo.svg';

function Anchor({ symbol, name, isHome, direction }) {
    return (
        <a href={direction} className="link" >
            {/* <div > */}
            < span className={isHome === true ? 'hide' : ''
            }> {symbol}</ span>
            <p className={isHome === true ? 'hide' : ''}>{name}</p>
            {/* </div> */}

            <div className={!isHome ? 'hide' : ''}>
                <img src={logo} alt='Logo' />
            </div>
        </a >
    )
}

export default Anchor