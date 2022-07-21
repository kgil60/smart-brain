import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

class App extends Component {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api').then(res => res.json()).then(data => setData(data.message));
  // }, []);

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

 onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

    const USER_ID = 'gilvaryke';
    const PAT = 'd44539c583f44bbebe888a6ef5a7bdd4';
    const APP_ID = 'smart-brain';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
    const IMAGE_URL = this.state.imageUrl;

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };

      fetch('https://api.clarifai.com/v2/models/' + MODEL_ID + '/versions/' + MODEL_VERSION_ID + '/outputs', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.status)
          this.displayBox(this.calculateBox(result));
        })
        .catch(error => console.log('error', error))
  }

  calculateBox = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    console.log(width, height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayBox = (boxData) => {
    console.log(boxData);
    this.setState({box: boxData}, () => console.log(this.state.box));
  }

  async particlesInit(main){ 
    console.log(main);

    await loadFull(main)
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
        <div className="App">
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
          <Navigation />
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries} />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
        </div>
    );
  }
}

export default App;


