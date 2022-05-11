import React from 'react'
import Footer from '../components/shared/Footer'

import employee from '../assets/csm-workers.jpeg';
import HeaderStrip from '../components/shared/HeaderStrip';
import smile from '../assets/icon-smile.svg'

function Food() {
    return (
        <main className='food'>
            {/* <header className='main__header'>
                <div className='main__header-logo'>
                    <img src={logo} alt='Logo' />
                </div>

                <div className='main__header-menu hide-for-desktop'>
                    <img src={menu} alt='Logo' />
                </div>
            </header> */}
            <div className='hide-for-desktop'>
                <HeaderStrip />
            </div>

            <div className='food__hero hide-for-mobile'>
                <div className='food__hero__left'>
                    <div className='food__hero__left-title'>
                        <span>Food</span>
                    </div>

                    <div>
                        <h1>The Food Hall</h1>
                    </div>
                </div>

                <div className='food__hero__right'>
                    <div className='food__hero__right-times'>
                        <p>
                            Food Hall Hours:
                            <br />
                            Mon – Thurs: 11:00AM - 6:00PM
                            <br />
                            Fri - Sun: 11:00AM - 7:00PM
                        </p>
                    </div>

                    <div className='food__hero__right-img'>
                        <span>餐饮</span>
                        <div className='food__hero__right-img-pic'>
                            <img src={employee} alt="Employees" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='food__hero hide-for-desktop'>
                <div className='food__hero__right-times'>
                    <p>
                        Food Hall Hours:
                        <br />
                        Mon – Thurs: 11:00AM - 6:00PM
                        <br />
                        Fri - Sun: 11:00AM - 7:00PM
                    </p>
                </div>

                <div>
                    <h1>The Food Hall</h1>
                </div>

                <div className='food food__hero__right-img'>
                    <span>餐饮</span>
                    <div className='food__hero__right-img-pic'>
                        <img src={employee} alt="Employees" />
                    </div>
                </div>
            </div>

            <div className='food__grid'>
                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

                <div className='food__grid-item'>
                    <span>Korean Meets Mexican</span>
                    <h3>Azumma</h3>
                </div>

            </div>

            <div className='food__discount'>

                <div className='food__discount-img'>
                    <img src={smile} alt="Smily face" />
                </div>
                <div className='food__discount-content'>
                    <h2>Happy Hour</h2>

                    <p>
                        Every Weekday, 5 - 7PM
                        $4 Beer &amp; $7 Wine
                        Come Hang With Us!
                        **** Tappy Tuesday
                        Pay with Apple Pay and receive 20% off
                        *Beer and Wine excluded*
                    </p>
                </div>
                <div className='food__discount-img second'>
                    <img src={smile} alt="Smily face" />
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Food