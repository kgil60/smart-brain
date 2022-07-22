import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navigation from '../Navigation/Navigation.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function particlesInit(main){ 
        console.log(main);
    
        await loadFull(main)
      }
    
      function particlesLoaded(container) {
        console.log(container);
      }

    async function onSubmitregister() {
        try {
            const response = await fetch('api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: username
                })
            })

            if(!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log(result)

            navigate('/')

        } catch (err) {
            throw new Error(err.message)
        }
    }

        return(
            <div>
                <Particles
                    className="particles"
                    id='tsparticles'
                    init={particlesInit}
                    loaded={particlesLoaded}
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
                <Navigation route={'register'}/>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input onChange={(event) => setUsername(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={(event) => setEmail(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={(event) => setPassword(event.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                            </div>
                            </fieldset>
                            <div className="">
                            <input onClick={onSubmitregister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                            </div>
                            <div className="lh-copy mt3">
                            </div>
                        </div>
                    </main>
            </article>
            </div>
        )
    }

export default Register;