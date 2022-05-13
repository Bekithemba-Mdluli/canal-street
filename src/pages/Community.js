import React from "react";
import HeaderStrip from "../components/shared/HeaderStrip";
import Footer from "../components/shared/Footer";

import csm from "../assets/csm.jpeg";
import radio from "../assets/icon-radio.svg";

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
              <img className="hide" src={csm} alt="Outside canal street" />
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

      <div class="single-events">
        <div class="single-events__grid">
          <h2>Market Events</h2>
          <div class="single-events__row">
            <div class="single-events__item">
              <span>10/22 (past)</span>
              <p>
                <a href="/community/event/small-business-retail-pop-up-weekend">
                  Small Business Retail Pop Up Weekend!
                </a>
              </p>
            </div>
            <div class="single-events__item empty"></div>
            <div class="single-events__item empty"></div>
            <div class="single-events__item">
              <span>02/07 (past)</span>
              <p>
                <a href="/community/event/new-balance-has-teamed-up-with-paris-based-restaurant-meets-streetwear">
                  New Balance x Paperboy Paris by Greenhouse @ Canal Street
                  Market
                </a>
              </p>
            </div>
          </div>
          <div class="single-events__row">
            <div class="single-events__item">
              <span>12/11 (past)</span>
              <p>
                <a href="/community/event/comedy-show">Hack City 12/11</a>
              </p>
            </div>
            <div class="single-events__item empty"></div>
            <div class="single-events__item empty"></div>
            <div class="single-events__item">
              <span>07/27 (past)</span>
              <p>
                <a href="/community/event/taiwanese-waves-look-backa-pop-up-exhibition-for">
                  Taiwanese Wave
                </a>
              </p>
            </div>
          </div>
        </div>

        <a class="single-events__more" href="/community">
          view all
        </a>
      </div>

      <div className="com__features">
        <h2>Features</h2>

        <div className="com__features__grid">
          <div className="com__features__grid__item">
            <div className="com__features__grid__item-pic i1 i">
              {/* <img src={tech} alt="Bereop Tech" /> */}
            </div>
            <div className="com__features__grid__item-text">
              <span>CSM Cmmunity AMDC</span>
            </div>
          </div>

          <div className="com__features__grid__item">
            <div className="com__features__grid__item-pic i2 i">
              {/* <img src={tech} alt="Bereop Tech" /> */}
            </div>
            <div className="com__features__grid__item-text">
              <span>CSM Community - Joe's Steam Rice Rolls</span>
            </div>
          </div>

          <div className="com__features__grid__item">
            <div className="com__features__grid__item-pic i3 i">
              {/* <img src={tech} alt="Bereop Tech" /> */}
            </div>
            <div className="com__features__grid__item-text">
              <span>CSM Community - Bereop Tech</span>
            </div>
          </div>

          <div className="com__features__grid__item">
            <div className="com__features__grid__item-pic i4 i">
              {/* <img src={tech} alt="Bereop Tech" /> */}
            </div>
            <div className="com__features__grid__item-text">
              <span>CSM Community - Bereop Tech</span>
            </div>
          </div>
        </div>
      </div>

      <div className="com__radio">
        <div className='food__discount'>

          <div className='food__discount-img'>
            <img src={radio} alt="Smily face" />
          </div>
          <div className='food__discount-content'>
            <h2>Market Radio</h2>

            <p>
              Podcasted from the market
            </p>
          </div>
          <div className='food__discount-img thirdd'>
            <img className="third" src={radio} alt="Smily face" />
          </div>
        </div>

        <div className="com__radio__cards">
          <div className="com__radio__cards-card">
            <span>05/08</span>
            <p>
              S2E2: The Secret Art of Self-Defense w/ Emma Choi (NPR's "Everyone &amp; Their Mom")
            </p>
          </div>

          <div className="com__radio__cards-card">
            <span>05/08</span>
            <p>
              Haley Carter Speaks on Her Incredible Fight for the Afghanistan Women's National Team + NWSL Challenge Cup,/Regular Season News and Women's Champions League Final Preview
            </p>
          </div>

          <div className="com__radio__cards-card">
            <span>05/08</span>
            <p>
              We're back and we're better!
            </p>
          </div>
          <button className="btn">see all</button>
        </div>

      </div>

      <Footer />
    </main>
  );
}

export default Community;
