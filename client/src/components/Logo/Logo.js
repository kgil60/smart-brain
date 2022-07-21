import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{max:55}} style={{height: 150, width: 150}} perspective={250}>
                <div className='inner-element'><img style={{width: '90%', paddingTop: '7px'}} src={brain} alt='brain logo' /></div>
            </Tilt>
        </div>
    )
}

export default Logo;