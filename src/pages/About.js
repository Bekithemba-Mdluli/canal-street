import React from 'react'
// import MobileNav from '../components/shared/MobileNav'

import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg';
import plants from '../assets/plants.jpeg';
import csm from '../assets/csm.jpeg';
import space from '../assets/csm-inside.jpeg';
import employee from '../assets/csm-workers.jpeg';
import address from '../assets/csm-address.avif';
import Footer from '../components/shared/Footer';

function about() {
    return (
        <main className='main'>
            <header className='main__header'>
                <div className='main__header-logo'>
                    <img src={logo} alt='Logo' />
                </div>

                <div className='main__header-menu hide-for-desktop'>
                    <img src={menu} alt='Logo' />
                </div>
            </header>
            {/* <MobileNav /> */}

            <section className='main__section'>
                <h1>Canal Street Market is a carefully curated retail market, food hall &amp; community space open year-round at 265 Canal Street. </h1>
            </section>

            <div className='main__plants'>
                <img src={plants} alt='Canal street indoor nature' />
            </div>

            <section className='main__columns'>
                <h2>
                    A New Kind Of Market
                </h2>

                <div className='main__columns__cards'>

                    <div className='main__columns__cards-card'>
                        <div className='main__columns__cards-card-img'>
                            <img src={csm} alt='Outside canel market' />
                        </div>

                        <div className='main__columns__cards-card-text'>
                            <p>Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.</p>
                        </div>
                    </div>

                    <div className='main__columns__cards-card'>
                        <div className='main__columns__cards-card-img'>
                            <img src={space} alt='Outside canel market' />
                        </div>

                        <div className='main__columns__cards-card-text'>
                            <p>
                                Retail Market Hours:
                                <br />
                                Fri– Sun: 11:00AM - 7:00PM
                            </p>
                        </div>
                    </div>

                    <div className='main__columns__cards-card'>
                        <div className='main__columns__cards-card-img'>
                            <img src={employee} alt='Outside canel market' />
                        </div>

                        <div className='main__columns__cards-card-text'>
                            <p>
                                Food Hall Hours:
                                <br />
                                Mon – Thurs: 11:00AM - 6:00PM
                                <br />
                                Fri– Sun: 11:00AM - 7:00PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='main__events'>
                <span>活動</span>
                <h1>Market Events</h1>
                <span>活動</span>
            </div>

            <div className='main__events__row'>
                <div className='main__events__row-cards'>
                    <div className='main__events__row-cards-card border'>
                        <span>10/22</span>
                        <p>Small Business Retail Pop Up Weekend!</p>
                    </div>

                    <div className='main__events__row-cards-card border'>
                        <span>02/07</span>
                        <p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
                    </div>

                    <div className='main__events__row-cards-card border'>
                        <span>12/11</span>
                        <p>Hack City 12/11</p>
                    </div>


                </div>
                <div className='main__events__row-btn'>
                    <button className='btn'>see all</button>
                </div>
            </div>

            <section className='main__address'>
                <div className='main__address-add border'>
                    <h3>265 Canal St. New York, NY</h3>
                </div>

                <div className='main__address-img hide-for-mobile'>
                    <img src={address} alt="HQ location" />
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default about