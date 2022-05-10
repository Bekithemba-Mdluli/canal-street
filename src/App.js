import React, { useState } from 'react'
import Anchor from './components/Anchor';
import About from './pages/About';

function App() {
  const [isActive] = useState(1)
  return (
    <div>
      {/* <MobileNav /> */}
      <div className='hide-for-desktop'>
        <About />
      </div>
      <div className="outer hide-for-mobile">


        <div className="home panel active">
          <div className={isActive === 1 ? 'hide' : ''}>
            <Anchor isHome={true} />
          </div>
          <About />
        </div>

        <div className="one panel">
          <div className={isActive === 2 ? 'hide' : ''}>
            <Anchor symbol={'餐饮'} name={'Food'} isHome={false} />

          </div>
        </div>

        <div className="two panel">
          <div className={isActive === 3 ? 'hide' : ''}>
            <Anchor symbol={'購物'} name={'Retail'} isHome={false} />

          </div>
        </div>

        <div className="three panel">
          <div className={isActive === 4 ? 'hide' : ''}>
            <Anchor symbol={'文化'} name={'Community'} isHome={false} />

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
