import React from 'react';
import MobileBox from './mobile-box';
import Logo from '../images/logo.svg';
import MineLogo from '../images/mine-logo.png';
// import MineBlock from '../images/mine-block.png';

function Welcome({ setStartGame }) {
    return (
        <MobileBox>
            <div className="welcome">
                <img className='logo' src={Logo} alt="logo" />
                <h2>Rozwiąż QUIZ z </h2>
                <img className='mine-logo' src={MineLogo} alt="logo" />
                {/* <img className='logo' src={MineBlock} alt="logo" /> */}
                <button onClick={() => setStartGame(true)} className='start-btn'>START</button>
            </div>
        </MobileBox>
    )
}

export default Welcome;