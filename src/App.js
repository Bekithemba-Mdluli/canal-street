import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import Anchor from "./components/Anchor";
import About from "./pages/About";
import Food from "./pages/Food";
import Retail from "./pages/Retail";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      {/* <MobileNav /> */}
      <div className="hide-for-desktop">

        {/* <Food /> */}
        {/* <Retail /> */}
        {/* <Community /> */}
        <div className={window.location.pathname === '/' ? '' : 'hide'}>
          <About />
        </div>

        <div className={window.location.pathname === '/food' ? '' : 'hide'}>
          <Food />
        </div>

        <div className={window.location.pathname === '/retail' ? '' : 'hide'}>
          <Retail />
        </div>

        <div className={window.location.pathname === '/community' ? '' : 'hide'}>
          <Community />
        </div>

      </div>

      <div className="outer hide-for-mobile">
        <div className={window.location.pathname === '/' ? 'home panel active' : 'home panel'}>
          <div className={window.location.pathname === '/' ? 'hide' : ''}>
            <Anchor isHome={true} direction={'/'} />
          </div>

          <div className={window.location.pathname === '/' ? '' : 'hide'}>
            <About />
          </div>
        </div>
        {console.log(window.location.pathname === '/food' ? 'active' : '')}

        <div className={window.location.pathname === '/food' ? 'one panel active' : 'one panel'}>
          <div className={window.location.pathname === '/food' ? 'hide' : ''}>
            <Anchor symbol={"餐饮"} name={"Food"} isHome={false} direction={'/food'} />
          </div>

          <div className={window.location.pathname === '/food' ? '' : 'hide'}>
            <Food />
          </div>
        </div>

        <div className={window.location.pathname === '/retail' ? 'two panel active' : 'two panel'}>
          <div className={window.location.pathname === '/retail' ? 'hide' : ''}>
            <Anchor symbol={"購物"} name={"Retail"} isHome={false} direction={'/retail'} />
          </div>
          <div className={window.location.pathname === '/retail' ? '' : 'hide'}>
            <Retail />
          </div>
        </div>

        <div className={window.location.pathname === '/community' ? 'three panel active' : 'three panel'}>
          <div className={window.location.pathname === '/community' ? 'hide' : ''}>
            <Anchor symbol={"文化"} name={"Community"} isHome={false} direction={'/community'} />
          </div>
          <div className={window.location.pathname === '/community' ? '' : 'hide'}>
            <Community />
          </div>
        </div>
      </div>


      {/* <Routes> */}
      {/* <Route path="/food">
          <Food />
        </Route> */}
      {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
