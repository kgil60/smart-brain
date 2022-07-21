import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navigation from '../Navigation/Navigation.js';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    async particlesInit(main){ 
        console.log(main);
    
        await loadFull(main)
      }
    
      particlesLoaded(container) {
        console.log(container);
      }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    render() {
        return(
            <div>
                <Particles
                    className="particles"
                    id='tsparticles'
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={{
                    fpsLimit: 120,
                    particles: {
                        color: {
                        value: "#ffffff",
                        },
                        links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                        },
                        opacity: {
                        value: 0.5,
                        },
                        shape: {
                        type: "circle",
                        },
                        size: {
                        value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                    }}
                />
                <Navigation route={'signin'}/>
                <article className='br3 ba b--black-10 mv4 w-50-m w-25-l mw6 shadow-5 center'>
                    <main className='pa4 black-80'>
                        <div className='measure'>
                            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                                <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
                                <div className='mt3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email:</label>
                                    <input onChange={this.onEmailChange} className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='email' name='email-address' id='email-address' />
                                </div>
                                <div className='mt3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='password'>Password:</label>
                                    <input onChange={this.onPasswordChange} className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='password' id='password' />
                                </div>
                            </fieldset>
                            <div>
                                <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Sign In' />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default Signin;