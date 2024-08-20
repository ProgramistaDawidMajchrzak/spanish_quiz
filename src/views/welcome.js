import React, {useState} from 'react';
import MobileBox from './mobile-box';
import SpainFlag from '../images/flag-spain.jpeg';
import { Motion } from '../views/motion';
import { AnimatePresence } from 'framer-motion';

function Welcome({ setStartGame, setMode, setRzeczMode, rzeczMode }) {
    
    return (
        <MobileBox>
            <AnimatePresence mode="wait">
                <Motion>
                    {rzeczMode ? 
                    <div className="welcome">
                        <img className='logo' src={SpainFlag} alt="logo" />
                        <button onClick={() => {
                             setRzeczMode(false);
                        }} className='start-btn'>Wstecz</button>
                        <button onClick={() => {
                            setMode('rzeczowniki')
                            setStartGame(true)
                        }} className='start-btn'>Ogólne</button>
                        <button onClick={() => {
                            setMode('rzeczJedzenie')
                            setStartGame(true)
                        }} className='start-btn'>Jedzenie</button>
                        <button onClick={() => {
                            setMode('rzeczMeble')
                            setStartGame(true)
                        }} className='start-btn'>Meble</button>
                        <button onClick={() => {
                            setMode('rzeczOdzież')
                            setStartGame(true)
                        }} className='start-btn'>Odzież</button>
                    </div>
                    :
                    <div className="welcome">
                        <img className='logo' src={SpainFlag} alt="logo" />
                        <button onClick={() => {
                            setMode('wyrazenia')
                            setStartGame(true)
                        }} className='start-btn'>Wyrażenia</button>
                        <button onClick={() => {
                            setRzeczMode(true);
                        }} className='start-btn'>Rzeczowniki</button>
                        <button onClick={() => {
                            setMode('czasowniki')
                            setStartGame(true)
                        }} className='start-btn'>Czasowniki</button>
                        <button onClick={() => {
                            setMode('przymiotniki')
                            setStartGame(true)
                        }} className='start-btn'>Przymiotniki</button>
                    </div>
                    }
                 </Motion>
            </AnimatePresence>
        </MobileBox>
    )
}

export default Welcome;