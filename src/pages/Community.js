import React from "react";
import HeaderStrip from "../components/shared/HeaderStrip";
import Footer from "../components/shared/Footer";

import csm from "../assets/csm.jpeg";

function Community() {
  return (
    <main className="com">
      <div className="hide-for-desktop">
        <HeaderStrip />
      </div>

      <div className="com__hero hide-for-mobile">
        <div className="connn">
          <div className="com__hero__left">
            <div className="com__hero__left-title">
              <span>Community</span>
            </div>
          </div>

          <div className="com__hero__right">
            <div className="com__hero__right__times">
              <p>
                Our mixed-use space hosts
                <br />
                ongoing events, podcasts
                <br />
                &amp; artists in residence
              </p>
            </div>
          </div>
        </div>

        <div className="noc">
          <div className="com__hero__title">
            <h1>Canal St. Community</h1>
          </div>

          <div className="com__hero__img">
            <span>文化</span>
            <div className="com__hero__img-pic">
              <img src={csm} alt="Outside canal street" />
            </div>
          </div>
        </div>
      </div>

      <div className="com__hero hide-for-desktop">
        <div className="com__hero__left hide-for-mobile">
          <div className="com__left-title">
            <span>Community</span>
          </div>
        </div>

        <div className="com__hero__right">
          <div className="com__hero__right__times">
            <p>
              Our mixed-use space hosts
              <br />
              ongoing events, podcasts
              <br />
              &amp; artists in residence
            </p>
          </div>
        </div>

        <div className="com__hero__title hide-for-dektop">
          <h1>Canal St. Community</h1>
        </div>

        <div className="com__hero__img">
          <span>文化</span>
          <div className="com__hero__img-pic">
            <img src={csm} alt="Outside canal street" />
          </div>
        </div>
      </div>

      <div className="com__events">
        <h2>Market Events</h2>
        <div className="com__events__row">
          <div className="com__events__row-item">
            <span>10/22 (past)</span>
            <p>Samll Business Retail Pop Up Weeken!</p>
          </div>

          <div className="com__events__row-item">
            <span>02/07 (past)</span>
            <p>
              New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
            </p>
          </div>
        </div>
        <div className="com__events__row">
          <div className="com__events__row-item">
            <span>12/11 (past)</span>
            <p>Hack City 12/11</p>
          </div>

          <div className="com__events__row-item">
            <span>07/27 (past)</span>
            <p>Taiwanese Wave</p>
          </div>
        </div>

        <div className="com__events">
          <button className="btn">view all</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Community;
