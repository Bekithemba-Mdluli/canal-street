import React from "react";

import Footer from "../components/shared/Footer";

// import employee from "../assets/csm-workers.jpeg";
import inside from "../assets/csm-inside.jpeg";
import HeaderStrip from "../components/shared/HeaderStrip";
import flower from "../assets/icon-flower.svg";

function Retail() {
  return (
    <main className="food retail">
      {/* <header className='main__header'>
                <div className='main__header-logo'>
                    <img src={logo} alt='Logo' />
                </div>

                <div className='main__header-menu hide-for-desktop'>
                    <img src={menu} alt='Logo' />
                </div>
            </header> */}
      <div className="hide-for-desktop">
        <HeaderStrip />
      </div>

      <div className="food__hero hide-for-mobile">
        <div className="food__hero__left">
          <div className="food__hero__left-title">
            <span>Retail</span>
          </div>

          <div>
            <h1>The Retail Market</h1>
          </div>
        </div>

        <div className="food__hero__right">
          <div className="food__hero__right-times">
            <p>
              Retail Market Hours:
              <br />
              Fri – Sun: 11:00AM - 7:00PM
            </p>
          </div>

          <div className="food__hero__right-img">
            <span>購物</span>
            <div className="food__hero__right-img-pic">
              <img src={inside} alt="Inside Canal street" />
            </div>
          </div>
        </div>
      </div>

      <div className="food__hero hide-for-desktop">
        <div className="food__hero__right-times">
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

        <div className="food food__hero__right-img">
          <span>餐饮</span>
          <div className="food__hero__right-img-pic">
            <img src={inside} alt="Employees" />
          </div>
        </div>
      </div>

      <div className="food__grid">
        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>

        <div className="food__grid-item">
          <span>Design Objects</span>
          <h3>American Design Club</h3>
        </div>
      </div>

      <div className="food__discount">
        <div className="food__discount-img">
          <img src={flower} alt="Smily face" />
        </div>
        <div className="food__discount-content">
          <h2>The Best of NYC</h2>

          <p>All under one roof</p>
        </div>
        <div className="food__discount-img second">
          <img src={flower} alt="Smily face" />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Retail;
