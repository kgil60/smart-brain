import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isSignedIn, route }) => {
    if(isSignedIn) {
        return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p class="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
        )
    } else {
        if(route === 'signin') {
            return(
                <div>
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to='/register'>
                            <p className='f3 link dim black underline pa3 pointer'>Register</p>
                        </Link>
                    </nav>
                </div>
            )   
        } else if(route === 'register') {
            return(
                <div>
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to='/signin'>
                            <p className='f3 link dim black underline pa3 pointer'>Sign In</p>
                        </Link>
                    </nav>
                </div>
            )  
        } else {
            return(
                <div>
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to='/signin'>
                            <p className='f3 link dim black underline pa3 pointer'>Sign In</p>
                        </Link>
                        <Link to='/register'>
                            <p className='f3 link dim black underline pa3 pointer'>Register</p>
                        </Link>
                    </nav>
                </div>
            )
        }
    }
}

export default Navigation;