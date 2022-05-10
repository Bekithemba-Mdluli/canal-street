import React from 'react'

import email from '../../assets/icon-pencil.svg';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import mail from '../../assets/icon-mail.svg';

function Footer() {
    return (
        <footer className='footer'>

            <div className='footer__row'>
                <h3>Interested in becoming a vendor?</h3>
                <div className='footer__row-btn'>
                    <button className='btn'>click here</button>
                </div>
            </div>

            <div className='footer__socials'>
                <div className='footer__socials-card border'>
                    <div>
                        <img src={email} alt='Email us' />
                    </div>

                    <p>Email us</p>
                </div>

                <div className='footer__socials-card border'>
                    <div>
                        <img src={facebook} alt='Email us' />
                    </div>

                    <p>Follow us on facebook</p>
                </div>

                <div className='footer__socials-card border'>
                    <div>
                        <img src={instagram} alt='Email us' />
                    </div>

                    <p>Follow us on instagram</p>
                </div>
            </div>

            <div className='footer__email border'>
                <div className='footer__email-text hide-for-mobile'>
                    <span >Stay up to date with our newsletter</span>
                </div>

                <div className='footer__email__container hide-for-desktop'>
                    <div>
                        <img src={mail} alt='mail' />
                    </div>
                    <p>Get updates in your inbox</p>
                </div>

                <div className='footer__email__input'>
                    <input type='text' placeholder='Email' />
                    <input className='submit' type='submit' />
                </div>
            </div>
        </footer>
    )
}

export default Footer